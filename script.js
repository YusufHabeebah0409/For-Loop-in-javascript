const addition = () => {
  for(i=1;i<=column.value;i++){
    for(j=1;j<=row.value;j++){
      showContent.innerHTML += ` <tr>
            <td>${i} + ${j} = ${i+j}</td>
        </tr>`
    }
     
  }
}