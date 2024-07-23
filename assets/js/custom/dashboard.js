const authToken = localStorage.getItem('authToken');

async function makeAuthorizedRequest(url, method = 'GET', data = null) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${authToken}`
    };
  
    const options = {
      method,
      headers
    };
  
    if (data) {
      options.body = JSON.stringify(data);
    }
  
    const response = await fetch(url, options);
  
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  }

// const url = 'https://jenesaispas.chickenkiller.com'
// const url = 'http://127.0.0.1:8000'
const url = 'http://sircroco.pythonanywhere.com'
// const total_path = `${url}/total`

const total_path = `${url}/facturation-net-total`
const total_path_sorties = `${url}/facturation-sortie`
const total_path_ventes = `${url}/facturation-vente`


$(function() {
        // "Origin": 
        var results = {
            day: {
              entree: 0,
              sortie: 0
            },
            week: {
              entree: 0,
              sortie: 0
            },
            month: {
              entree: 0,
              sortie: 0
            }
          };
          
        $.get({url :total_path,
                  // "Origin":"http://127.0.0.1:5500" 
              }
            ).then((response)=>{
              console.log(response)
              results = {
                day: {
                  entree: response?.today["vente"],
                  sortie: response?.today["sorties"]
                },
                week: {
                  entree: response?.week["vente"],
                  sortie: response?.week["sorties"]
                },
                month: {
                  entree: response?.month["vente"],
                  sortie: response?.month["sorties"]
                }
              };
              console.log(response?.month)
              document.querySelector('h2#sales').textContent = `${results.day.entree.toLocaleString()} FCFA`;
              document.querySelector('h2#buys').textContent = `${results.day.sortie.toLocaleString()} FCFA`;
              document.querySelector('h2#net').textContent = `${(results.day.entree-results.day.sortie).toLocaleString()} FCFA`;

              const dropMenus = document.querySelectorAll(".dropdown-menu"); 
              dropMenus.forEach((dropMenu) =>{
                dropMenu.addEventListener("click", (event)=>{
                  if (event.target.tagName==='A') {
                    const itemId = event.target.id;
                    const itemValue = event.target.textContent;
                    console.log(itemId, itemValue);
                    if (itemId.indexOf("sales")>-1 ) {
                      if (itemValue==="Jour") {
                        document.querySelector('h2#sales').textContent = `${results.day.entree.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-sales').textContent = `Aujourd'hui`;
                        
                      }
                      if (itemValue==="Semaine") {
                        document.querySelector('h2#sales').textContent = `${results.week.entree.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-sales').textContent = `Cette semaine`;
                      }
                      if (itemValue==="Mois") {
                        document.querySelector('h2#sales').textContent = `${results.month.entree.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-sales').textContent = `Ce mois`;
                      }
                      
                    }

                    if (itemId.indexOf("buy")>-1 ) {
                      if (itemValue==="Jour") {
                        document.querySelector('h2#buys').textContent = `${results.day.sortie.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-buy').textContent = `Aujourd'hui`;
                        
                      }
                      if (itemValue==="Semaine") {
                        document.querySelector('h2#buys').textContent = `${results.week.sortie.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-buy').textContent = `Cette semaine`;
                      }
                      if (itemValue==="Mois") {
                        document.querySelector('h2#buys').textContent = `${results.month.sortie.toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-buy').textContent = `Ce mois`;
                      }
                      
                    }
                    if (itemId.indexOf("net")>-1 ) {
                      if (itemValue==="Jour") {
                        document.querySelector('h2#net').textContent = `${(results.day.entree-results.day.sortie).toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-net').textContent = `Aujourd'hui`;
                        
                      }
                      if (itemValue==="Semaine") {
                        document.querySelector('h2#net').textContent = `${(results.week.entree-results.week.sortie).toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-net').textContent = `Cette semaine`;
                      }
                      if (itemValue==="Mois") {
                        document.querySelector('h2#net').textContent = `${(results.month.entree-results.month.sortie).toLocaleString()} FCFA`;
                        document.querySelector('.text-truncate-net').textContent = `Ce mois`;
                      }
                      
                    }
                    
                  }
                })
              })
            }).done((stuff)=>{
              
            })
        const values1 = {
                "today": {
                    "Total vente": 0,
                    "Total sorties": 0,
                    "Situation net": 0
                },
                "week": {
                    "Total vente": 0,
                    "Total sorties": 0,
                    "Situation net": 0
                },
                "month": {
                    "Total vente": 0,
                    "Total sorties": 0,
                    "Situation net": 0
                },
                "year": {
                    "Total vente": 0,
                    "Total sorties": 0,
                    "Situation net": 0
                }
            }
        var recent_sales = [
            {
              "id": 1,
              "libelle": "Achat de Bonbon",
              "tiers": "FICO",
              "montant": "500",
              "date_cree": "2024-07-20T10:14:39.849945Z"
            }
          ]
        

          var recent_clients= [
            {
              name: "Aiden Smith",
              id: '12345',
              amount: 12000,
              status: 'Paid',
              time: '10:05'
            },
            {
              name: "Mia Rodriguez",
              id: '23456',
              amount: 9800,
              status: 'Pending',
              time: '12:10'
            },
            {
              name: "Liam Brown",
              id: '34567',
              amount: 15000,
              status: 'Paid',
              time: '09:30'
            },
            {
              name: "Isabella Garcia",
              id: '45678',
              amount: 11200,
              status: 'Pending',
              time: '13:00'
            },
          ]
        const adding = `
        <li class="d-flex align-items-center gap-2">
          <div class="flex-shrink-0"><img src="../assets/images/dashboard-3/user/1.png" alt=""></div>
          <div class="flex-grow-1"><a href="cart.html">
              <h5>${recent_clients[0].name}</h5></a>
            <p class="text-truncate">ID #${recent_clients[0].id}<span class="text-success">${recent_clients[0].status}</span></p>
          </div>
          <div class="active-status active-online"></div>
          <div class="recent-text"> 
            <h5>${recent_clients[0].amount} FCFA</h5>
            <p>${recent_clients[0].time}</p>
          </div>
        </li> 
        `

        var recent = $(".recent-customers");
        recent_clients.forEach((client)=>{
          recent.append(`
        <li class="d-flex align-items-center gap-2">
          <div class="flex-shrink-0"><img src="../assets/images/dashboard-3/user/1.png" alt=""></div>
          <div class="flex-grow-1"><a href="cart.html">
              <h5>${client.name}</h5></a>
            <p class="text-truncate">ID #${client.id}<span class="text-success">${client.status}</span></p>
          </div>
          <div class="active-status active-online"></div>
          <div class="recent-text"> 
            <h5>${client.amount} FCFA</h5>
            <p>${client.time}</p>
          </div>
        </li> 
        `);
        })

        var table = $('#recent-orders').DataTable({
            "searchable": true,
            "pageLength": 5,
          });
        const ventes_inner = `
        <tr>
            <td>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label"></label>
                </div>
            </td>

            <td>
                <div class="d-flex align-items-center gap-2">
                <div class="flex-shrink-0"><img src="../assets/images/dashboard-3/1.png" alt=""></div>
                <div class="flex-grow-1"><a href="checkout.html">
                    <h6>Decorative Plants</h6></a></div>
                </div>
            </td>
            
            <td>20 Sep - 03.00AM</td>
            <td>QTY:12</td>
            <td class="customer-img">  
                <div class="d-flex align-items-center gap-2">
                <div class="flex-shrink-0"><img src="../assets/images/dashboard-3/user/6.png" alt=""></div>
                <div class="flex-grow-1">
                    <h6>Leonie Green  </h6>
                </div>
                </div>
            </td> 
        </tr>
        `

          $.get({url :total_path_ventes,
                    // "Origin":"http://127.0.0.1:5500" 
                }
            ).then((res)=>{
                console.log(res)  
                const ventes = res
                    console.log(ventes)
                    const recent_sales_table = document.getElementById('recent-orders-body')
                    table.destroy() 
                    
                    ventes.forEach((vente)=>{
                      const row = document.createElement('tr')
                      row.innerHTML = `
                      <tr>
                          <td>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="">
                              <label class="form-check-label"></label>
                              </div>
                          </td>

                          <td>
                              <div class="d-flex align-items-center gap-2"> 
                                  <div class="flex-grow-1">
                                      <a href="checkout.html">
                                          <h6>${vente.produit.designation}</h6>
                                      </a>
                                  </div>
                              </div>
                          </td>
                          
                          <td>${vente.date_cree.split('T')[0]} - ${vente.date_cree.split('T')[1].split('.')[0]}</td>
                          <td>${vente.quantite}</td>
                          <td class="customer-img">  
                              <div class="d-flex align-items-center gap-2"> 
                                  <div class="flex-grow-1">
                                      <h6>${vente.montant}</h6>
                                  </div>
                              </div>
                          </td> 
                      </tr>
                      ` 
                      recent_sales_table.appendChild(row)
                    })
                    table = $('#recent-orders').DataTable({
                      "searchable": true,
                      "pageLength": 5,
                    });
                })

        var expense_table = $('#recent-expenses').DataTable({
            "searchable": true,
            "pageLength": 5,
            }); 
        $.get({url :total_path_sorties}).then((res)=>{
            console.log(res)  
            const sorties = res
                console.log(sorties)
                const recent_expense_table = document.getElementById('recent-expenses-body')
                expense_table.destroy()
                
                sorties.forEach((sortie)=>{
                    const row = document.createElement('tr')
                    row.innerHTML = `
                    <tr>
                        <td>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="">
                            <label class="form-check-label"></label>
                            </div>
                        </td>

                        <td>
                            <div class="d-flex align-items-center gap-2"> 
                                <div class="flex-grow-1">
                                    <a href="checkout.html">
                                        <h6>${sortie.libelle}</h6>
                                    </a>
                                </div>
                            </div>
                        </td> 
                        <td>${sortie.tiers}</td>
                        <td class="customer-img">  
                            <div class="d-flex align-items-center gap-2"> 
                                <div class="flex-grow-1">
                                    <h6>${sortie.montant}</h6>
                                </div>
                            </div>
                        </td> 
                        <td>${sortie.date_cree.split('T')[0]} - ${sortie.date_cree.split('T')[1].split('.')[0]}</td>
                    </tr>
                    ` 
                    recent_expense_table.appendChild(row)
                })
                expense_table = $('#recent-expenses').DataTable({
                    "searchable": true,
                    "pageLength": 5,
                  });
         })

        document.querySelector('h2#sales').textContent = `${results.day.entree.toLocaleString()} FCFA`;
        document.querySelector('h2#buys').textContent = `${results.day.sortie.toLocaleString()} FCFA`;
        document.querySelector('h2#net').textContent = `${(results.day.entree-results.day.sortie).toLocaleString()} FCFA`;

        const dropMenus = document.querySelectorAll(".dropdown-menu"); 
        dropMenus.forEach((dropMenu) =>{
          dropMenu.addEventListener("click", (event)=>{
            if (event.target.tagName==='A') {
              const itemId = event.target.id;
              const itemValue = event.target.textContent;
              console.log(itemId, itemValue);
              if (itemId.indexOf("sales")>-1 ) {
                if (itemValue==="Jour") {
                  document.querySelector('h2#sales').textContent = `${results.day.entree.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-sales').textContent = `Aujourd'hui`;
                  
                }
                if (itemValue==="Semaine") {
                  document.querySelector('h2#sales').textContent = `${results.week.entree.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-sales').textContent = `Cette semaine`;
                }
                if (itemValue==="Mois") {
                  document.querySelector('h2#sales').textContent = `${results.month.entree.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-sales').textContent = `Ce mois`;
                }
                
              }

              if (itemId.indexOf("buy")>-1 ) {
                if (itemValue==="Jour") {
                  document.querySelector('h2#buys').textContent = `${results.day.sortie.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-buy').textContent = `Aujourd'hui`;
                  
                }
                if (itemValue==="Semaine") {
                  document.querySelector('h2#buys').textContent = `${results.week.sortie.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-buy').textContent = `Cette semaine`;
                }
                if (itemValue==="Mois") {
                  document.querySelector('h2#buys').textContent = `${results.month.sortie.toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-buy').textContent = `Ce mois`;
                }
                
              }
              if (itemId.indexOf("net")>-1 ) {
                if (itemValue==="Jour") {
                  document.querySelector('h2#net').textContent = `${(results.day.entree-results.day.sortie).toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-net').textContent = `Aujourd'hui`;
                  
                }
                if (itemValue==="Semaine") {
                  document.querySelector('h2#net').textContent = `${(results.week.entree-results.week.sortie).toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-net').textContent = `Cette semaine`;
                }
                if (itemValue==="Mois") {
                  document.querySelector('h2#net').textContent = `${(results.month.entree-results.month.sortie).toLocaleString()} FCFA`;
                  document.querySelector('.text-truncate-net').textContent = `Ce mois`;
                }
                
              }
              
            }
          })
        })
        // $.ajax({
          //   url: "get_data.php",
          //   method: "POST",
          //   data: { timePeriod: timePeriod },
          //   success: function(data) {
          //     // Update the numbers in the card
          //     $("#order-value").html(data.total_sales);
          //     $(".total-icon").html(data.total_icon);

          //     // Update the "depuis ce main" text
          //     $(".text-truncate").html(data.time_period);
          //   }
          // });

          
          $("#userdropdown2").change(function() {
          var timePeriod = $(this).val();                    
        });


        $("#userdropdown2").change(function() {
          var timePeriod = $(this).val();                    
        });
      });