import React from 'react';
import { Card } from 'react-bootstrap';
import zzz1 from '../images/zzz1.jpg';
import { motion } from "framer-motion";
import zzz2 from '../images/zzz2.jpg';
import zzz3 from '../images/zzz3.jpg';

const Projects = () => {
    
    const ProjectList = [{
        id:1,
        name: "Project 1",
        imageUrl: zzz1
    },
    {
        id:2,
        name: "Project 2",
        imageUrl: zzz2
    },
    {
        id:3,
        name: "Project 3",
        imageUrl: zzz3
    },
   
]

    return (
    <motion.div className='projects' 
    animate={{
        scale: [2,1],
        rotate: [90,0],
    }}
    transition={{
    duration: 0.5,
    ease: "easeInOut"
    }}
    >
        
        <h2>Projects</h2>
        <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div key={item.id} whileHover={{
                scale: 1.1,
                transtion: {duration: 0.5 }
            }}>
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
    )
}

export default Projects;