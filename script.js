const addition = () => {
  let output = showContent.innerHTML
  output = ""
  for (i = 1; i <= row.value; i++) {
    output += `<tr>`
    for (j = 1; j <= column.value; j++) {
      output += `<td>${i} + ${j} = ${i + j}</td>`
    }
    output += `</tr>`
  }
  showContent.innerHTML = output
  column.value = ""
  row.value = ""
}


const subtrate = () => {
 let output = showContent.innerHTML
  output = ""
  for (i = 1; i <= row.value; i++) {
    output += `<tr>`
    for (j = 1; j <= column.value; j++) {
      output += `<td> ${i} - ${j} = ${i - j}</td>`
    }
    output += `</tr>`
  }
  showContent.innerHTML = output
  column.value = ""
  row.value = ""
}


const divide = () => {
  let output = showContent.innerHTML
   output = ""
   for (i = 1; i <= row.value; i++) {
     output += `<tr>`
     for (j = 1; j <= column.value; j++) {
       output += `<td> ${i} / ${j} = ${i / j}</td>`
     }
     output += `</tr>`
   }
   showContent.innerHTML = output
   column.value = ""
   row.value = ""
 }



 const multiple = () => {
  let output = showContent.innerHTML
   output = ""
   for (i = 1; i <= row.value ; i++) {
     output += `<tr>`
     for (j = 1; j <=column.value ; j++) {
       output += `<td> ${i} * ${j} = ${i * j}</td>`
     }
     output += `</tr>`
   }
   showContent.innerHTML = output
   column.value = ""
   row.value = ""
 }