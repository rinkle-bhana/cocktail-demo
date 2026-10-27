import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = new SplitText("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
                ease: 'power1.inOut'
        });

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .to('#f-right-leaf', { y: '-50', duration: 1, ease: 'power1.inOut' })
        .to('#f-left-leaf', { y: '-50', duration: 1, ease: 'power1.inOut' }, '<');
    });
        
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>123 Main Street, City, State 12345</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>info@ourbar.com</p>
                    <p>(123) 456-7890</p>
                </div>
                <div>
                    <h3>Open Every day</h3>
                    {openingHours.map((time) =>{
                        return <p key={time.day}>{time.day}: {time.time}</p>;
                    })}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                    {socials.map((social) => {
                        return (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.name} />
                            </a>
                        );
                    })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;