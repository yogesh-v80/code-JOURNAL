function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function UserProfileCard(props) {
  return (
    <Card>
      <img src={props.profilePicture} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </Card>
  );
}

export default function App() {
  return (
    <div>
      <UserProfileCard 
        name="John Doe" 
        profilePicture="https://example.com/profile.jpg" 
        bio="I'm a software developer." 
      />
    </div>
  );
}


In this example, the Card component is specialized to create a 
UserProfileCard component that displays a user's name, 
profile picture, and bio. 
The UserProfileCard component passes these props 
to the Card component, which then displays them
 inside a styled card container.