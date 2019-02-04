
        let jehovahWitnesses = [{
                name: "Мария",
                lastName: "Салтыкова",
                age: 25
            },
            {
                name: "Оксана",
                lastName: "Меньшинова",
                age: 20
            },
            {
                name: "Андрей",
                lastName: "Первозваный",
                age: 100
            },
            {
                name: "Василий",
                lastName: "Гофман",
                age: 40
            },
            {
                name: "Поручик",
                lastName: "Ржевский",
                age: "вечно молодой"
            }
        ];
        let seventhDayAdventists = [{
                name: "Мария",
                lastName: "Розгозина",
                age: 22
            },
            {
                name: "Оксана",
                lastName: "Меньшинова",
                age: 20
            },
            {
                name: "Андрей",
                lastName: "Первозваный",
                age: 100
            },
            {
                name: "Алексей",
                lastName: "Гофман",
                age: 40
            },
            {
                name: "Капитан",
                lastName: "Очевидность",
                age: "вечно молодой"
            }
        ];

        function filtered(arr1, arr2, arg) {
            return arr1.filter(el => {
                let flag = true;
                arr2.map(el2 => {
                    if (el[arg] === el2[arg]) flag = false
                });
                return flag;
            });
        };
        console.log(filtered(jehovahWitnesses, seventhDayAdventists, 'name'));

