import "./Primary.css"
import bulbasaur from "./assets/bulbasaur.jpg";

const Primary = () => {
    return <div className="primary">
        <h2>Bulbasaur's Showcase Component</h2>
        <img src={bulbasaur} alt="bublbasaur" />
        <h2>Bulbasaur's type is <strong className="grass">Grass</strong> and one of their moves is <strong className="vine-whip">Vine Whip</strong></h2>
        </div>
}

export default Primary;