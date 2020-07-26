let money = 20;

let items = {'apel': 2, 'pisang': 4, 'jeruk': 6}
for(item_name in items){
    console.log('---------------------------------');
    console.log(`Anda memiliki ${money} dollar di dompet anda.`);
    console.log(`Harga setiap ${item_name} ${items[item_name]} dollar.`);

    let input_count = prompt(`Mau berapa ${item_name}?`);
    console.log(`Anda akan membeli ${input_count} ${item_name}.`);

    let count = input_count;
    let total_price = items[item_name] * count;
    console.log(`Harga total adalah ${total_price} dollar.`);

    if(money >= total_price){
        console.log(`Anda telah membeli ${input_count} ${item_name}.`);
        money -= total_price

        if(money == 0){
            console.log('Dompet anda kosong, Silahkan melakukan TopUP.');
            break
        }
    }else{
        console.log('Uang anda tidak mencukupi.');
        console.log(`Anda tidak dapat membeli ${item_name} sebanyak itu.`);
    }
}
console.log(`Uang anda tinggal ${money} dollar`);
