













#####



########



Object.keys(user)              -- there it extracting the keys properties from user and putting all in array
Object.keys(user).length       -- we can use len property bcs it converting in array.
 


########

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}


OR 


function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}





#######
Puzz

const [formData, setFormData] = React.useState({goal:"", by:""});

	function changeHandler(e){
		setFormData({...formData, [e.target.name]: e.target.value});

	}
	
	
	
	
#########

<script>
	

	const desserts = [ {
		title: 'chocolate',
		description: 'sdfljsdl lskdjflksdj f',
		calories: 500
	}]


	const newDesserts = desserts.map(dessert => {
		return{
			title: dessert.title.toUpperCase(),
			...dessert,
			kCal: dessert.calories/1000,
	}

	})


	console.log(newDesserts)
</script>


#######


