import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './q&a.styles.scss';

const QnA = () => (
    <div className='qna-page'>
        <h2 className='title'>Q&A</h2>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Who made this website?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        My name is Hee Su and I'm a CS student at UBC.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Why did you make this website?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Well.. First, I wanted to practice React more. Second, I wanted to keep
                        track of what I baked/cooked. So I decided to make a mock e-commerce website
                        with baked goods I made so far :-) Who knows? Maybe one day I'll decide to actually
                        sell baked goods. If that happens, I can just use this website to take orders.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How did you make this website?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I used React library to render components using JSX. I also used Redux library
                        to keep states globally and to allow access from all components using Higher Order Components.
                        For backend, I used Google Firebase which handled databases, google sign-ins, etc.
                        I also downloaded npm packages for some pages (i.e., this Q&A Accordion and Gallery's Image pop-ups)
                        and used Stripe API for payments.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Did you really make these baked goods / foods all by yourself?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Yes! :D
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Why do you bake?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I bake when I'm stressed. If I'm not stressed, I don't feel motivated to bake.
                        Thus I bake a lot during exam periods.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>

);

export default QnA;
