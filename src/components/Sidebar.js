import bear from "../assets/bear.png"
import teddy from "../assets/teddy.png"


function Side() {
    return (
        
        <div className="side">
            <h5>MENU</h5>
            <div className="menu-item">
                <a>Testimonies</a>
                <a>News letter</a>
                <a>Quotes</a>
                <a>Questions</a>
                <a>Parables</a>
                <a></a>
            </div>
            <h5>MESSAGES</h5>
            <div className="menu-item">
                <a>How to be saved?</a>
                <a>Assurance</a>
                <a>Child of God</a>
                <a>The two Families</a>
                <a>A Siners Prayer</a>
                <a>Hope</a>
            </div>
            <h5>PAGES</h5>
            <div className="menu-item">
                <a>The Shepherd-KJV</a>
                <a>BBCM</a>
                <a>BBeCK</a>
                <a>The Soul Winners</a>
                
                
            </div>

            <footer>
                <p>All Rights Reserved by A&J

                    <img src={bear}/>
                    <img src={teddy}/>
                
                </p>
            </footer>

        </div>
        
       
    )
}

export default Side ;