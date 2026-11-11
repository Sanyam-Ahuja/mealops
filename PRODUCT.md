# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
React + TypeScript + Vite; Node.js + TypeScript + Express; PostgreSQL in deployment. Initial payment flow is a clearly labeled sandbox simulation.

## Users
Students ordering meals for campus pickup and kitchen operators preparing and handing off those orders.

## Product Purpose
MealOps connects menu discovery and pickup ordering to a kitchen queue and ingredient inventory.

## Positioning
The student order and kitchen ticket are the same backend record; valid kitchen transitions and inventory effects are reflected across both views.

## Operating Context
Students browse available dishes and place pickup orders. Kitchen operators accept, prepare, mark ready, and collect orders using a touch-friendly board.

## Capabilities and Constraints
The MVP covers outlet discovery, menu, cart, order creation, simulated payment confirmation, kitchen lifecycle, ingredient stock decrement, and low-stock signals. No live payment provider, real vendor, or real food photography was supplied. Demo content is labeled synthetic.

## Brand Commitments
MealOps; student ordering uses warm editorial commerce presentation, while kitchen operations use a separate high-contrast touch interface, as specified in prompt.md.

## Evidence on Hand
The order lifecycle, ingredient model, interaction requirements, and screen requirements in ../prompt.md. No real vendor or product photography is supplied.

## Product Principles
- Backend prices and availability are authoritative.
- A kitchen transition updates the order record.
- Inventory changes are transactional and traceable.
- Payment demonstration is never presented as a real charge.
