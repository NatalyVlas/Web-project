
function loadScript(url, callback) {
    const script = document.createElement('script') // создает объект

    script.src = url // атрибуту src присваивает url путь
    script.onload = callback // когда скрипт загрузится, вызовется callback

    document.body.appendChild(script) // добавляется в body
}