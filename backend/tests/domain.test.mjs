import test from 'node:test';
import assert from 'node:assert/strict';
import { placeOrder, seed, transitionOrder } from '../src/domain.ts';

test('order idempotency, ingredient deduction and kitchen transitions stay consistent',()=>{
  const state=structuredClone(seed);const request={outlet_id:'orchard',pickup_name:'Demo student',items:[{item_id:'wrap',quantity:1}]};const before=state.stock.Chickpeas;
  const first=placeOrder(state,request,'key-1');const retry=placeOrder(state,request,'key-1');assert.equal(retry.id,first.id);assert.equal(state.orders.length,1);assert.equal(state.stock.Chickpeas,before-1);
  assert.throws(()=>transitionOrder(state,first.id,'preparing'),{status:409});assert.equal(transitionOrder(state,first.id,'accepted').status,'accepted');assert.equal(transitionOrder(state,first.id,'preparing').status,'preparing');assert.equal(transitionOrder(state,first.id,'ready').status,'ready');
});

test('cross-outlet and insufficient-stock orders do not mutate inventory',()=>{
  const state=structuredClone(seed);const before=structuredClone(state.stock);
  assert.throws(()=>placeOrder(state,{outlet_id:'noodle',pickup_name:'x',items:[{item_id:'bowl',quantity:1}]},'bad'),{status:404});assert.deepEqual(state.stock,before);
  state.stock.Chickpeas=0;assert.throws(()=>placeOrder(state,{outlet_id:'orchard',pickup_name:'x',items:[{item_id:'wrap',quantity:1}]},'low'),{status:409});assert.deepEqual(state.stock,{...before,Chickpeas:0});
});
