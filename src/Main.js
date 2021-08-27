 const Home = () => {
      
    function namet(){
        var nikk = document.getElementById('nk')
         var info = document.createElement('div')
var amount= document.getElementById('nikhil').value
var srvice=document.getElementById('service').value

let tip = amount*srvice
    
     var india = document.getElementById('list')
     
     let one = Number(1)
     let four = Number( document.getElementById('final').value)
     let total = (four + one )
     document.getElementById('final').value=total

     let rupp = tip
      let poor = Number(document.getElementById('semi').value)
      let toat = (poor + rupp)
      document.getElementById('semi').value= toat

     info.innerHTML = (`${nikk.value} offering a tip of ${tip} rupees`);

   
        india.appendChild(info)

    }



    return (
        <div id='container'  style={{margin:30,textAlign:"center " ,backgroundColor:"cornsilk",height:550}}>
            <h1>TIP CALCULATOR</h1>
            <div className="contaner" style={{margin:1,textAlign:"center " ,backgroundColor:"blanchedalmond", padding:25}}>
            <div>ENTER YOUR BILL AMOUNT</div>
            <input type={Number} placeholder='Amount' id = 'nikhil' style={{width:600}}></input ></div>

            <div  style={{padding:20,margin:1,backgroundColor:"blanchedalmond"}}> 
            <div style={{ display: "inline-block",padding:10,margin:10}}>HOW WAS THE SERVICE ?</div>
            <select id="service" style={{display: "inline-block",padding:5,margin:10}}>
                <option value='0.2' >Excellent</option>
                <option value='0.1' >Intermediate</option>
                <option value='0.05' >Good</option>
            </select>
            <input type='text' placeholder='Customers names' id='nk'style={{ display: "inline-block",padding:5 ,margin:10}} ></input>
            <button onClick={namet} style={{ display: "inline-block",padding:5 ,margin:10}}>ADD CUSTOMER</button>
            </div>

            <div style={{margin:1,
                padding:20,backgroundColor:"blanchedalmond",color:"red"}}>
            <div style={{backgroundColor:"cornsilk",textAlign:"center"}}>CUSTOMER LIST</div>
            <ul id='list' >
                
            </ul></div>
            <div  style={{padding:20,margin:1,backgroundColor:"blanchedalmond",border:2}}> 

            <div style={{ display: "inline-block",padding:10,margin:10}}>NO. OF CUSTOMERS</div>
            <input  id='final' value=' 'disabled ></input>
            <div  style={{ display: "inline-block",padding:10,margin:10}}>TOTAL TIP</div>
            <input id='semi' disabled ></input>
            </div>
            <h3>Thankyou for Tip</h3>
        </div>
    )
}
export default Home;