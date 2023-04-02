let date = [
    {
        name:'Nuremir',
        img:'./2.jpg',
        title:'soon',
        loading:'./loading.gif'
    },
]

let main = document.createElement('div')
const Add = () =>{const RenderItem = () =>{
  let fragment = new DocumentFragment()
    date.map((el)=>{
      localStorage.setItem('Title',el.title)
      localStorage.setItem('Name',el.name)
      localStorage.setItem('img',el.img)
      let div = document.createElement('div')
      div.className = 'Div'
      div.innerHTML = `
      <img src="${el.loading}" class="loading" alt="...">
      `
       setTimeout(() => {
         div.innerHTML = `
       <div class="card" style="width: 18rem;">
      <img src="${localStorage.getItem('img')}" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title">${localStorage.getItem('Name')}</h5>
       <p class="card-text">${localStorage.getItem('Title')}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
     </div>
       `
       }, 1300);
     
       fragment.append(div)
    }
    )
    return fragment
}
main.append(RenderItem())
document.body.append(main)
}

const Del = () =>{
    
  localStorage.clear()
  location.reload()
    
  }
