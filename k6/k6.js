import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 }, // протягом 2 хвилин підняти навантаження до 100 користувачів
        { duration: '1m', target: 100 }, // підтримувати 100 користувачів протягом 5 хвилин
        { duration: '1m', target: 200 }, // протягом 2 хвилин підняти навантаження до 200 користувачів
        { duration: '1m', target: 200 }, // підтримувати 200 користувачів протягом 5 хвилин
        { duration: '1m', target: 300 }, // протягом 2 хвилин підняти навантаження до 300 користувачів
        { duration: '1m', target: 300 }, // підтримувати 300 користувачів протягом 5 хвилин
        { duration: '1m', target: 0 }, // зменшити навантаження до 0 користувачів протягом 1 хвилин
    ],
};

export default function () {
    http.get('http://localhost:8000/up');
    sleep(1);
}
