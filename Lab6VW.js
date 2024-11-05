// 1. Создайте массив объектов, представляющих блюда в меню ресторана.
const menu = [
    { id: 1, name: "Суп Том Ям", description: "Острый тайский суп с креветками и грибами", type: "Суп", price: 15 },
    { id: 2, name: "Салат Цезарь", description: "Салат с курицей, сыром пармезан и соусом Цезарь", type: "Салат", price: 12 },
    { id: 3, name: "Борщ", description: "Традиционный русский свекольный суп с мясом", type: "Суп", price: 10 },
    { id: 4, name: "Пицца Маргарита", description: "Пицца с томатным соусом и сыром моцарелла", type: "Пицца", price: 18 },
    { id: 5, name: "Стейк Рибай", description: "Сочный стейк из говядины", type: "Основное блюдо", price: 25 },
    { id: 6, name: "Крем-суп из грибов", description: "Нежный крем-суп с грибами и сливками", type: "Суп", price: 11 },
];

// 2. Используя функцию map(), создайте новый массив, содержащий только названия всех блюд в меню.
const dishNames = menu.map(dish => dish.name);
console.log("Названия блюд:", dishNames);

// 3. Используя функцию filter(), создайте новый массив, содержащий только блюда определенного типа (например, только супы).
const soups = menu.filter(dish => dish.type === "Суп");
console.log("Супы:", soups);

// 4. Используя функцию some(), проверьте, есть ли хотя бы одно блюдо с определенным ингредиентом (например, "сыр").
const hasCheese = menu.some(dish => dish.description.includes("сыр"));
console.log("Есть ли блюдо с сыром:", hasCheese);

// 5. Используя функцию every(), проверьте, все ли блюда имеют цену выше 10.
const allAboveTen = menu.every(dish => dish.price > 10);
console.log("Все блюда дороже 10:", allAboveTen);

// 6. Используя функцию find(), найдите блюдо с наибольшей ценой.
const mostExpensiveDish = menu.find(dish => dish.price === Math.max(...menu.map(d => d.price)));
console.log("Самое дорогое блюдо:", mostExpensiveDish);

// 7. Используя функцию reduce(), вычислите общую стоимость всех блюд в меню.
const totalCost = menu.reduce((sum, dish) => sum + dish.price, 0);
console.log("Общая стоимость всех блюд:", totalCost);

// 8. Используя функцию forEach(), выведите информацию о каждом блюде в консоль в удобочитаемом формате.
menu.forEach(dish => {
    console.log(`Блюдо: ${dish.name}\nОписание: ${dish.description}\nЦена: $${dish.price}\n`);
});

// 9. Используя оператор spread (...), создайте копию массива блюд.
const menuCopy = [...menu];
console.log("Копия меню:", menuCopy);

// 10. Используя функцию slice(), создайте новый массив, содержащий только первые три блюда из исходного массива.
const firstThreeDishes = menu.slice(0, 3);
console.log("Первые три блюда:", firstThreeDishes);

// 11. Используя функцию push(), добавьте новое блюдо в конец массива.
menu.push({ id: 7, name: "Тирамису", description: "Итальянский десерт с маскарпоне и кофе", type: "Десерт", price: 9 });
console.log("Меню после добавления:", menu);

// 12. Используя функцию pop(), удалите последнее блюдо из массива.
menu.pop();
console.log("Меню после удаления последнего блюда:", menu);
