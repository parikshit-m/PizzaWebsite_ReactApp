import React from 'react'
import '../styles/About.css'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in perspiciatis delectus incidunt voluptatum ratione quam maiores consequatur accusamus quod? Exercitationem nam error, tenetur ut expedita rem ex vero optio odio repudiandae itaque sequi est fuga voluptates repellendus quisquam maiores labore culpa hic recusandae? Dolores quaerat blanditiis aliquid perferendis quas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, praesentium voluptatum quos exercitationem culpa earum hic cum reiciendis eos enim id eligendi voluptate maxime expedita aut iusto fuga ipsa sed. Pariatur est neque accusamus, consectetur, explicabo quos quibusdam optio incidunt quas ipsam porro magnam tenetur alias quod illo iste sunt!</p>
            </div>
        </div>
    )
}

export default About
