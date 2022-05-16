import React, {useState} from 'react';


function Diary(){
	const[firstName, setFirstName] = useState('');
	const[telNum, setTelNum] = useState('');
	const[email, setEmail] = useState('');
	const[error, setError] = useState('');
	const[lists, setLists] = useState([]);
	const remove = (id) => {
    let newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  }

	const handleForm = ((e) =>{
		e.preventDefault();
		if(firstName&&email&&telNum){
			const list = {id: new Date().getMilliseconds().toString(), firstName,telNum,email}
			setLists((lists) =>{
				return[...lists, list]
			})
			setFirstName('')
			setEmail('')
			setTelNum('')
			console.log(list);
		}else{
			setError('Fill out the form');
		}
	});

	return(
		<>
			<form className='form'>
		          <div className='f-control'>
		            <label htmlFor='firstName'>Name :</label>
		            <input 
		              type='text'
		              id='firstName' 
		              name='firstName' 
		              value={firstName} 
		              onChange={(e) => setFirstName(e.target.value)} 
		              required
		              placeholder='John Doe'
		              
		            />
		          </div>
		          <div className='f-control'>
		          	<label htmlFor='telNum'>Tel.no.:</label>
		          	<input 
		          	//   style={{marginRight: '2rem'}}
		          	  type='tel' 
		          	  id='telNum' 
		          	  name='telNum' 
		          	  value={telNum} 
		          	  onChange={(e) => setTelNum(e.target.value)} 
		          	  pattern='+[0-9]{3}-[0-9]' 
		          	  required 
		          	  placeholder='+123-456789'
		          	 />
		          </div>
		          <div className='f-control'>
		            <label htmlFor='email'>Email :</label>
		            <input 
		              type='text'  
		              id='email' 
		              name='email' 
		              value={email} 
		              onChange={(e) => setEmail(e.target.value)}
		              pattern='@'
		              placeholder='johndoe@email.com'
		            />
		          </div>
		          <button className='btn'style={{marginLeft:'3rem', marginRight:"3rem", display:'grid', placeContent:'center'}} onClick={handleForm}>add person</button>
            </form>

            {
            	lists.map((list) =>{
            		const{id,firstName,telNum,email} = list;
            		return(
            			<div className='container'>
							<div className='list'>
            				   <h3>{firstName}</h3>
            				   <span>{telNum}</span>
            				   <a href={'mailto:email'}><span>{email}</span></a>
            				   <button className='btn' onClick={() => remove(id)}>Delete</button>
            			    </div>
						</div>


            		)
            	})
            }
            <button className='btn btnr' onClick={() => setLists([])}>Clear all</button>
		</>
	)
}


export default Diary;










