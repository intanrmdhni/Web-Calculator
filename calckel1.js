
//buat nampilin layar
function dis(val)
{
document.getElementById("layar").value+=val
 }
//buat eval / operasi
function hit()
{
let x = document.getElementById("layar").value
let y = eval(x)
document.getElementById("layar").value = y
}
// nge reset
function clr()
{
document.getElementById("layar").value = ""
}