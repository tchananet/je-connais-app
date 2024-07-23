const url = 'https://jenesaispas.chickenkiller.com'
      const total_path = `${url}/total`
      $(function() {
        // "Origin": 
        var results = {
            day: {
              entree: 20000,
              sortie: 0
            },
            week: {
              entree: 20000,
              sortie: 15000
            },
            month: {
              entree: 22000,
              sortie: 16000
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