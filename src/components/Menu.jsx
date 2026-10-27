import { useState, useRef } from "react";
import { sliderLists } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef();

    const totalCocktails = sliderLists.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }
    const currentCocktail = getCocktailAt(0);
    const previousCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' });
    
        gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        // .to("#m-left-leaf", { y: -200}, 0)
        // .to("#m-right-leaf", { y: 200}, 0)
    
    },[currentIndex]);

    return(
        <section aria-labelledby="menu-heading" id="menu">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((Cocktail, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button key={index} className={`${ isActive ? 'text-white border-white': 'text-white/50 border-white/50'}`} onClick={() => goToSlide(index)}>
                            {Cocktail.name}
                        </button>
                    )
                    })
                }
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{previousCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right arrow" />
                    </button>
                    <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left arrow" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} alt={currentCocktail.name} className="" />
                </div>
                <div className="recipe">
                    <div className="info" ref={contentRef}>
                        <p>Recipe For:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;