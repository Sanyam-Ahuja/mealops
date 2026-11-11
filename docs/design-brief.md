# MealOps design brief

- **Product mechanism:** the student checkout creates the exact ticket shown in the kitchen queue and changes stock through the order backend.
- **Audience / task:** students browse dishes and reserve pickup; operators accept, prepare, and hand off those orders on a tablet.
- **Surface / mode:** student discovery / menu ordering with a switchable kitchen operations surface; Operate.
- **Visual world:** warm paper and ink with generous food imagery, editorial menu typography, tomato/coral action color, and soft butter accents. Kitchen switches to high-contrast neutral tiles and large status controls. Avoid one generic dashboard for both roles.
- **Navigation:** Discover, Orders, Kitchen (demo role switch), account.
- **First viewport:** welcoming menu editorial, available outlet selector, search and category chips, image-led dish list, persistent order bag.
- **Primary interactions:** filter menu; add/remove items and customize; place order with sandbox payment; kitchen moves order through valid states; stock level updates and low-stock alert appears.
- **Tokens:** paper #faf6ee, ink #2d2923, muted #766f64, tomato #b74734, butter #f2cd7b, leaf #4d6a4c; serif editorial headline with Inter UI; 14px base; 14px corner radius.
- **Responsive:** student menu becomes a single-column image-led list; kitchen columns become horizontal lanes with large touch targets.
- **States:** synthetic vendor/menu label; sold-out; empty bag; pending order; payment sandbox status; low-stock warning.
