btn.addEventListener("click", f_out);

  function f_out (){
      q = Number(I.value)*Number(I.value)*Number(R.value)*Number(t.value);
      result.innerHTML ="Q = "+q;
      n = q / Number(t.value);
      res_m.innerHTML = "N = "+n; 
    
  }
