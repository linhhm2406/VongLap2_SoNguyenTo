let input_number = parseInt(prompt('Can kiem tra tu 3 den :'));
let i = 3;
let count = 0;
for (i = 3; i <= input_number; i++) {
    let j = 2;
    let count_mod = 0;
    for (j = 2; j < (i - 1); j++) {
        if (i % j == 0) {
            count_mod = count_mod + 1;
        }
    }
    if (count_mod == 0) {
        if (count <= 20) {
            document.write(i + ',');
        }
        count++;
    }
}
