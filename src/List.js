

const List = ({people}) => {


  return (
    <div className="container d-flex justify-content-center gap-4 flex-column align-items-center">
     {people.map(person=>{
      const {id, name, age, image}=person;
      return <article key={id} className=''>
        <img src={image} alt={name} className='img rounded'/>
        <div className="text-center">
          <h4 className='fw-bold m-2'>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
     })
     }
    </div>
  
  )
}

export default List
