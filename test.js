function convert() {
    let nhapvao = document.getElementById("amount").value;
    let daynhap2 = document.getElementById("from-currency").value;
    let daynhap1 = document.getElementById("to-currency").value;
    if (daynhap2 === "VND" && daynhap1 === "USD")
        result = nhapvao/23000;
    else if (daynhap2 === "USD" && daynhap1 === "VND")
        result = nhapvao*23000;
    else
        result = nhapvao;
    document.getElementById("result" ).innerText=result;

}