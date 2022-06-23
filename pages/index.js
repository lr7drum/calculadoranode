function home (){
    return <html lang="en">
    
    <body>
        <div> <h1>dddd</h1>
        <div class="calculadora">
            <h1 class="title">calculadora</h1>
            <p id="resultado"></p>
            <table>
                <tr>
                    <th><button onclick="insert('7')">7</button></th>
                    <th><button onclick="insert('8')">8</button></th>
                    <th><button onclick="insert('9')">9</button></th>
                    
                    <th > <button class="operadores" onclick="limpo()">CE</button> </th>
                    <th><button onclick="limpo()" >C</button></th>
               
                </tr>
                <tr>
                   <th> <button onclick="insert('4')">4</button></th>
                   <th> <button onclick="insert('5')">5</button></th>
                   <th> <button onclick="insert('6')">6</button></th>
                   <th > <button onclick="insert('/')"class="operadores" >/</button> </th>
                   <th><button onclick="insert('*')">*</button></th>
                </tr>
                <tr>
                    <th> <button onclick="insert('1')">1</button></th>
                    <th> <button onclick="insert('2')">2</button></th>
                    <th> <button onclick="insert('3')">3</button></th>
                    <th > <button class="operadores"  onclick="insert('-')">-</button> </th>
                    <th><button onclick="insert('+')">+</button></th>
                 </tr>
                 <tr>
                    <th> <button onclick="insert('0')">0</button></th>
                    <th> </th>
                    <th> <button onclick="insert('.')">.</button></th>
                    <th > <button class="operadores"  onclick="calcular()">=</button> </th>
                   
                 </tr>
    
            </table>
        </div>
    </div>
    </body>
    </html>
}

export default home