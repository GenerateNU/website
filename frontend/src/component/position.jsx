import React from 'react'
import useFetch from 'react-fetch-hook'
import Placeholder from './placeHolder.jpg'

const Position = ({id}) => {

    const { loading, error, data } = useFetch(`https://damp-tundra-35584.herokuapp.com/positions/${id}`)

    if (data === undefined) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  

    
    // {"id":2,
    // "title":"Community Development Lead",
    // "team":"communityteam",
    // "subTitle":"Develop and grow our community",
    // "description":"As the Community Development Lead you will work to make 
        // Generate an increasingly more diverse, inclusive, and equitable community through a variety of initiatives. 
        // In this role you will work to ensure that Generate members feel included and feel like they belong in the community, 
        // as well as fostering a place where members can grow both professionally and personally.",
    // "responsibilities":"- Leading and developing the community development team\n- Utilize both feedback and data 
        // from previous and current semesters to understand the diversity, equity, and inclusion of the community, 
        // as well as determining the needs of the community and where and how as a community we can grow\n- Maintaining 
        // and building initiatives that fosters the belonging, diversity, equity, and inclusion of team members in 
        // Generate\n- Building a general support system for Generate members\n- Determine how we can better communicate 
        // our initiatives and events to members\n- Develop initiatives and resources for current and future Generate leaders",
    // "timeCommitment":"Around 10 Hours/Week. This is a semester-long position that starts in December.",
    // "applicationDeadline":"2021-12-12",
    // "applicationLink":"https://forms.gle/bkkCbabHAgp1DBaz8",
    // "published_at":"2021-11-15T00:00:21.709Z","created_at":"2021-11-15T00:00:14.530Z","updated_at":"2021-11-15T00:00:21.738Z"}
    
    return (
        <div>
            
            <div>
                <img src={Placeholder} alt="placeholder" style={{
                    "width": "100%",
                    "height": "auto",

                }}/>
                {/* <ImageBackground source={Placeholder} alt="placeholder" style={{width: '100%', height: '100%'}}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Centered text</Text>
                    </View>
                </ImageBackground> */}
            </div>

            <div className="position-container">
                <div className="position-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="position-subtitle">
                    <h2>
                        {data.subTitle === null ? (
                            ""
                        ) : (
                            data.subTitle
                        )}        
                    
                    </h2>
                </div>
                <div className="position-description">
                    <h3>Description</h3>
                    <p>
                        
                    {data.description === null ? (
                            "No description available"
                        ) : (
                            data.description
                        )}  
                        
                    </p>
                </div>
                <div className="position-responsibilities">
                    <h3>Responsibilities</h3>

                    
                    {data.responsibilities === null ? (

                        <p>No responsibilities available</p>
                    ) :
                    
                    ( data.responsibilities.split('\n').map((bullet, index) => {
                        return <li key={index}>{bullet}</li>
                    })

                    )
                    
                    }
                    <p></p>

                </div>
                <div className="position-timeCommitment">
                    <h3>Time Commitment</h3>
                    <p>
                    {data.timeCommitment === null ? (
                            "No time commitment available"
                        ) : (
                            data.timeCommitment
                        )}  
                    </p>
                </div>
                <div className="position-applicationDeadline">
                    <h3>Application Deadline</h3>
                    <p>
                    {data.applicationDeadline === null ? (
                            "No application deadline available"
                        ) : (
                            data.applicationDeadline
                        )}  
                    </p>
                </div>
                <div className="position-applicationLink" style={{
                    marginBottom: "1rem"

                }}>
                    
                    {data.applicationLink === null ? (
                        <p>No application link available</p>
                    ) : (
                        
                        <button
                            className="btn btn-lg btn-primary text-uppercase" 
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.open(data.applicationLink, "_blank");
                            }}
                        > Application Link </button>
                    )}
                    
                </div>
                

            </div>
        </div>
    )


}

export default Position
