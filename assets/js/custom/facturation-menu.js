const url = 'https://jenesaispas.chickenkiller.com'
      const total_path = `${url}/total`
 
      const url_base = 'https://jenesaispas.chickenkiller.com' 
    // console.log("formdata ", formData);
    const table_body = document.getElementsByTagName('tbody')[0]
    console.log(table_body)

    var product_list = {}
    const product_select = document.getElementById('product_list')

    var product_list2 = {}
    const product_select2 = document.getElementById('product_list2')

    const canal_options = [
        {name:'Access', id:1, prix:5000},
        {name:'Decouverte', id:2, prix:10000},
        {name:'Family', id:3, prix:15000}

    ]

    canal_options.forEach((item)=>{ 
        product_select2.innerHTML += `
                <option value="${item.name}" data-value="${item.id}" data-price="${item.prix}">    </option>
              ` 
            }) 
    fetch(`${url_base}/produit/`, {
      method: "GET", 
      mode: "cors", 
      // origin: "  "

    }).then((data)=>{
        console.log("data", data.json().then((res)=>{
            console.log('res:', res) 
            
            res.forEach((item)=>{ 
              product_select.innerHTML += `
                <option value="${item.nom}" data-value="${item.id}" data-price="${item.prix}">    </option>
              ` 
            }) 
            console.log(data)
            // var data = {}; 
            $("#product_list").each(function(i,el) {  
              //  data[]
              $(el).data("label",$(el).val())
            });
            // `data` : object of `data-value` : `value`
            console.log(data, $("#product_list").val()); 
          }
        ));
    })
    .catch((err)=>{
        console.log('err', err);
    }); 

      function validateMyForm(product=null) {
        const daForm = document.querySelector("#form1");
          const formData = new FormData(daForm);
          var bodyPayload = {}
          var jsGridData = [];
          if (product=null) {
            $("#product-table").jsGrid("option", "data").forEach(function(item) {
                jsGridData.push(item)
            });
          } else {
            jsGridData.push({id:13, quantite:parseInt($('#quantitee').val()), observation:"RAS" })
          }
          `
          {
            "id": 2,
            "quantite": 100,
            "observation": "Produit K"

            var value = $('#product').val();
              var quantity = parseInt($('#quantite').val());
        },

          `
          // formData.append("produits", jsGridData); 
          for(const pair of formData.entries()){
            bodyPayload[pair[0]]= pair[1]
          }
          // formData.keys().forEach((key) =>bodyPayload[key]= formData.get(key))
          bodyPayload['produits'] = jsGridData
          console.log(bodyPayload);
          // $.post(
          //   `${url_base}/facture/new`,
          //   formData
          //   ).then((item)=>{
          //     console.log(item);
          //   }).catch((err)=>{
          //     console.log("An error has occured: ", err)
          //   })
            fetch( `${url_base}/facture/new`, {
              method:'POST', 
              body:JSON.stringify(bodyPayload),
              headers: {
                  'Content-Type': 'application/json',
                },
            }
            ).then((res)=>{
              console.log(res.body)

              res.json().then((response)=>{
                console.log(response)
                window.location.href="invoice-template.html?id="+response.id;
              }).catch((free)=>{
                  res.text().then((text)=>{
                    console.log(text)
                  })
              })
            })
          // alert(formData)
        
        
      }


       $(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      console.log(3)
      $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='produit"+i+
      "' type='text' placeholder='Produit' class='form-control input-md'  /></td><td><input  name='quantity"+i+
      "' type='text' placeholder='Quantite'  class='form-control input-md'></td><td><input  name='price"+i+
      "' type='text' placeholder='Prix Unitaire'  class='form-control input-md'></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
         if(i>1){
         $("#addr"+(i-1)).html('');
         i--;
         }
     }); 

}); 
$(document).ready(function() {

    $('.js-example-basic-single').select2();
    const product_select = document.getElementById('product_list').innerHTML+=``
});
  //  data-toggle="modal" data-target="#exampleModal"
        function getCustomInsertHeader(gridId) {
          
            return $("<button>").attr("type", "button")
              .attr("data-bs-toggle", "modal")
              .attr("data-bs-target", "#exampleModal")
              .text("Ajouter produit")
              .addClass("btn btn-secondary")
            .on("click", function() {
              console.log("asd")
                $("#" + gridId).jsGrid({ inserting: false });
            });
            // <button class="btn btn-secondary" type="button" data-bs-toggle="modal" data-original-title="test" data-bs-target="#exampleModal">Simple</button>
        }

        function getCustomInsertControls(gridId) {
            var grid = $("#" + gridId).data("JSGrid");
            return $("<input>")
              .addClass("jsgrid-button")
              .addClass("jsgrid-update-button")
              .attr({
                  type: "button",
              })
              .on("click", function () {
                  grid.insertItem().done(function () {
                      grid.option("inserting", false)
                  });
              })
              .add($("<input>")
              .addClass("jsgrid-button")
              .addClass("jsgrid-cancel-edit-button")
              .attr({
                  type: "button",
              })
              .on("click", function () {
                  grid.option("inserting", false);
              }));
        } 
        
$(function() {
  var idCounter = 1;
  $("#product-table").jsGrid({
    width: "100%",
    height: "400px",
    sorting: true,
    paging: true,
    editing: true,
    inserting: true, // Enable inserting
    autoload: true,
    controller: {
      insertItem: function(item) {
        // Handle insert request
        // Implement your logic here to perform a POST request with the new item data
        item.ID = idCounter++;
         console.log("New item:", item);

         $.post(
        'http://127.0.0.1:3001/product/',
        item
         ).done(()=>{
          console.log(item);
        })
        var insertForm = $("#product-table");
        insertForm.find("input").val("");
      },
      updateItem: function(item) {
        // Handle update request
        // Implement your logic here to perform a POST request with the updated item data
        console.log("Updated item:", item);
      }
    },  
    fields: [
    { name: "ID", title:"No",  type: "number", width: 10, readOnly:true },
    { name: "produit", title: "Designation", type: "text", width: 60 },
    { name: "quantite",title: "Quantite", type: "number", width: 10 }, 
    { name: "price",title: "Prix Unitaire", type: "number", width: 10 },
    { name: "id", title: "product_id", type: "text", visible:false, width: 60 }, 
    { name: "observation", title: "observation", type: "text", visible:false, width: 60 }, 
      
      { type: "control", 
      // width: 100,
       headerTemplate: function() { return getCustomInsertHeader("product-table") },
      //  insertTemplate: function() { return getCustomInsertControls("product-table") },
        editButton: true,
        editButtonTooltip: "Edit",
        updateButton: true,
        updateButtonTooltip: "Update",
        // insertButton: true, // Add "Add" button for inserting new rows
        // insertButtonTooltip: "Add",
   }
    ]
  });
  // $("#submitMe").on("click", function(event) {
  //   if (event.keyCode === 13) { // 13 is the key code for Enter
  //     $("#product-table").jsGrid("insertItem"); // Trigger item insertion on Enter key press
  //   }
  // });


  $('#submitMe').click(function()
            {
              
              var value = $('#product').val();
              var quantity = parseInt($('#quantite').val());
              var id=$('#product_list [value="' + value + '"]').data('value')
              var price=$('#product_list [value="' + value + '"]').data('price')
                // alert($('#product_list [value="' + value + '"]').data('price'));
                $("#product-table").jsGrid("insertItem",{id:id, produit:value, quantite:quantity, price:price, observation:'RAS'});
                $('#product').val('')
                $('#quantite').val('')
                $('#exampleModal').modal('hide') 
            });


});
$('#prix').change(()=>{
    console.log('x')
})