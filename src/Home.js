import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            
            <Card
                src="https://a0.muscache.com/im/pictures/a77b1c22-96cf-4ac0-a430-b5572c15df8a.jpg?im_w=720"
                title="Entire Home"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
              <Card
                src="https://a0.muscache.com/im/pictures/a77b1c22-96cf-4ac0-a430-b5572c15df8a.jpg?im_w=720"
                title="Entire Home"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                
            />
            </div>
            <div className='home__section'>

            <Card
                src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="5000rs/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/a77b1c22-96cf-4ac0-a430-b5572c15df8a.jpg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="4000rs/night"
            />
          
            <Card
                src="https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="2000rs/night"
            />
            </div>

            <div className='home__section'>

            <Card
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfZnJw5To6ou5bLb900nrG7MgzHaxcKPu-w&usqp=CAU"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="5000rs/night"
            />
            <Card
                src="https://www.planetware.com/wpimages/2020/01/best-underwater-hotels-atlantis-the-palm-dubai.jpg?im_w=620"
                title="1 Bedroom apartment Underwater"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="10000rs/night"
            />
          
            <Card
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfZnJw5To6ou5bLb900nrG7MgzHaxcKPu-w&usqp=CAU"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="2000rs/night"
            />
            </div>
        </div>
    )
}

export default Home
