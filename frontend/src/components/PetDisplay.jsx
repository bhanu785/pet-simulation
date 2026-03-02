// where the sprite sheets come into play; change based on variables such as hunger, happiness, etc.
import { useState, useEffect } from 'react';
import catWalk1 from '../assets/spriteSheets/cat/Walk (1).png';
import catWalk2 from '../assets/spriteSheets/cat/Walk (2).png';
import catWalk3 from '../assets/spriteSheets/cat/Walk (3).png';
import catWalk4 from '../assets/spriteSheets/cat/Walk (4).png';
import catWalk5 from '../assets/spriteSheets/cat/Walk (5).png';
import catWalk6 from '../assets/spriteSheets/cat/Walk (6).png';
import catWalk7 from '../assets/spriteSheets/cat/Walk (7).png';
import catWalk8 from '../assets/spriteSheets/cat/Walk (8).png';
import catWalk9 from '../assets/spriteSheets/cat/Walk (9).png';
import catWalk10 from '../assets/spriteSheets/cat/Walk (10).png';

import catIdle1 from '../assets/spriteSheets/cat/Idle (1).png';
import catIdle2 from '../assets/spriteSheets/cat/Idle (2).png';
import catIdle3 from '../assets/spriteSheets/cat/Idle (3).png';
import catIdle4 from '../assets/spriteSheets/cat/Idle (4).png';
import catIdle5 from '../assets/spriteSheets/cat/Idle (5).png';
import catIdle6 from '../assets/spriteSheets/cat/Idle (6).png';
import catIdle7 from '../assets/spriteSheets/cat/Idle (7).png';
import catIdle8 from '../assets/spriteSheets/cat/Idle (8).png';
import catIdle9 from '../assets/spriteSheets/cat/Idle (9).png';
import catIdle10 from '../assets/spriteSheets/cat/Idle (10).png';

import catFall1 from '../assets/spriteSheets/cat/Fall (1).png';
import catFall2 from '../assets/spriteSheets/cat/Fall (2).png';
import catFall3 from '../assets/spriteSheets/cat/Fall (3).png';
import catFall4 from '../assets/spriteSheets/cat/Fall (4).png';
import catFall5 from '../assets/spriteSheets/cat/Fall (5).png';
import catFall6 from '../assets/spriteSheets/cat/Fall (6).png';
import catFall7 from '../assets/spriteSheets/cat/Fall (7).png';
import catFall8 from '../assets/spriteSheets/cat/Fall (8).png';

import catHurt1 from '../assets/spriteSheets/cat/Hurt (1).png';
import catHurt2 from '../assets/spriteSheets/cat/Hurt (2).png';
import catHurt3 from '../assets/spriteSheets/cat/Hurt (3).png';
import catHurt4 from '../assets/spriteSheets/cat/Hurt (4).png';
import catHurt5 from '../assets/spriteSheets/cat/Hurt (5).png';
import catHurt6 from '../assets/spriteSheets/cat/Hurt (6).png';
import catHurt7 from '../assets/spriteSheets/cat/Hurt (7).png';
import catHurt8 from '../assets/spriteSheets/cat/Hurt (8).png';
import catHurt9 from '../assets/spriteSheets/cat/Hurt (9).png';
import catHurt10 from '../assets/spriteSheets/cat/Hurt (10).png';

import catDead1 from '../assets/spriteSheets/cat/Dead (1).png';
import catDead2 from '../assets/spriteSheets/cat/Dead (2).png';
import catDead3 from '../assets/spriteSheets/cat/Dead (3).png';
import catDead4 from '../assets/spriteSheets/cat/Dead (4).png';
import catDead5 from '../assets/spriteSheets/cat/Dead (5).png';
import catDead6 from '../assets/spriteSheets/cat/Dead (6).png';
import catDead7 from '../assets/spriteSheets/cat/Dead (7).png';
import catDead8 from '../assets/spriteSheets/cat/Dead (8).png';
import catDead9 from '../assets/spriteSheets/cat/Dead (9).png';
import catDead10 from '../assets/spriteSheets/cat/Dead (10).png';

import catJump1 from '../assets/spriteSheets/cat/Jump (1).png';
import catJump2 from '../assets/spriteSheets/cat/Jump (2).png';
import catJump3 from '../assets/spriteSheets/cat/Jump (3).png';
import catJump4 from '../assets/spriteSheets/cat/Jump (4).png';
import catJump5 from '../assets/spriteSheets/cat/Jump (5).png';
import catJump6 from '../assets/spriteSheets/cat/Jump (6).png';
import catJump7 from '../assets/spriteSheets/cat/Jump (7).png';
import catJump8 from '../assets/spriteSheets/cat/Jump (8).png';

import catRun1 from '../assets/spriteSheets/cat/Run (1).png';
import catRun2 from '../assets/spriteSheets/cat/Run (2).png';
import catRun3 from '../assets/spriteSheets/cat/Run (3).png';
import catRun4 from '../assets/spriteSheets/cat/Run (4).png';
import catRun5 from '../assets/spriteSheets/cat/Run (5).png';
import catRun6 from '../assets/spriteSheets/cat/Run (6).png';
import catRun7 from '../assets/spriteSheets/cat/Run (7).png';
import catRun8 from '../assets/spriteSheets/cat/Run (8).png';

import catSlide1 from '../assets/spriteSheets/cat/Slide (1).png';
import catSlide2 from '../assets/spriteSheets/cat/Slide (2).png';
import catSlide3 from '../assets/spriteSheets/cat/Slide (3).png';
import catSlide4 from '../assets/spriteSheets/cat/Slide (4).png';
import catSlide5 from '../assets/spriteSheets/cat/Slide (5).png';
import catSlide6 from '../assets/spriteSheets/cat/Slide (6).png';
import catSlide7 from '../assets/spriteSheets/cat/Slide (7).png';
import catSlide8 from '../assets/spriteSheets/cat/Slide (8).png';
import catSlide9 from '../assets/spriteSheets/cat/Slide (9).png';
import catSlide10 from '../assets/spriteSheets/cat/Slide (10).png';


import dogWalk1 from '../assets/spriteSheets/dog/Walk (1).png';
import dogWalk2 from '../assets/spriteSheets/dog/Walk (2).png';
import dogWalk3 from '../assets/spriteSheets/dog/Walk (3).png';
import dogWalk4 from '../assets/spriteSheets/dog/Walk (4).png';
import dogWalk5 from '../assets/spriteSheets/dog/Walk (5).png';
import dogWalk6 from '../assets/spriteSheets/dog/Walk (6).png';
import dogWalk7 from '../assets/spriteSheets/dog/Walk (7).png';
import dogWalk8 from '../assets/spriteSheets/dog/Walk (8).png';
import dogWalk9 from '../assets/spriteSheets/dog/Walk (9).png';
import dogWalk10 from '../assets/spriteSheets/dog/Walk (10).png';

import dogIdle1 from '../assets/spriteSheets/dog/Idle (1).png';
import dogIdle2 from '../assets/spriteSheets/dog/Idle (2).png';
import dogIdle3 from '../assets/spriteSheets/dog/Idle (3).png';
import dogIdle4 from '../assets/spriteSheets/dog/Idle (4).png';
import dogIdle5 from '../assets/spriteSheets/dog/Idle (5).png';
import dogIdle6 from '../assets/spriteSheets/dog/Idle (6).png';
import dogIdle7 from '../assets/spriteSheets/dog/Idle (7).png';
import dogIdle8 from '../assets/spriteSheets/dog/Idle (8).png';
import dogIdle9 from '../assets/spriteSheets/dog/Idle (9).png';
import dogIdle10 from '../assets/spriteSheets/dog/Idle (10).png';

import dogFall1 from '../assets/spriteSheets/dog/Fall (1).png';
import dogFall2 from '../assets/spriteSheets/dog/Fall (2).png';
import dogFall3 from '../assets/spriteSheets/dog/Fall (3).png';
import dogFall4 from '../assets/spriteSheets/dog/Fall (4).png';
import dogFall5 from '../assets/spriteSheets/dog/Fall (5).png';
import dogFall6 from '../assets/spriteSheets/dog/Fall (6).png';
import dogFall7 from '../assets/spriteSheets/dog/Fall (7).png';
import dogFall8 from '../assets/spriteSheets/dog/Fall (8).png';

import dogHurt1 from '../assets/spriteSheets/dog/Hurt (1).png';
import dogHurt2 from '../assets/spriteSheets/dog/Hurt (2).png';
import dogHurt3 from '../assets/spriteSheets/dog/Hurt (3).png';
import dogHurt4 from '../assets/spriteSheets/dog/Hurt (4).png';
import dogHurt5 from '../assets/spriteSheets/dog/Hurt (5).png';
import dogHurt6 from '../assets/spriteSheets/dog/Hurt (6).png';
import dogHurt7 from '../assets/spriteSheets/dog/Hurt (7).png';
import dogHurt8 from '../assets/spriteSheets/dog/Hurt (8).png';
import dogHurt9 from '../assets/spriteSheets/dog/Hurt (9).png';
import dogHurt10 from '../assets/spriteSheets/dog/Hurt (10).png';

import dogDead1 from '../assets/spriteSheets/dog/Dead (1).png';
import dogDead2 from '../assets/spriteSheets/dog/Dead (2).png';
import dogDead3 from '../assets/spriteSheets/dog/Dead (3).png';
import dogDead4 from '../assets/spriteSheets/dog/Dead (4).png';
import dogDead5 from '../assets/spriteSheets/dog/Dead (5).png';
import dogDead6 from '../assets/spriteSheets/dog/Dead (6).png';
import dogDead7 from '../assets/spriteSheets/dog/Dead (7).png';
import dogDead8 from '../assets/spriteSheets/dog/Dead (8).png';
import dogDead9 from '../assets/spriteSheets/dog/Dead (9).png';
import dogDead10 from '../assets/spriteSheets/dog/Dead (10).png';

import dogJump1 from '../assets/spriteSheets/dog/Jump (1).png';
import dogJump2 from '../assets/spriteSheets/dog/Jump (2).png';
import dogJump3 from '../assets/spriteSheets/dog/Jump (3).png';
import dogJump4 from '../assets/spriteSheets/dog/Jump (4).png';
import dogJump5 from '../assets/spriteSheets/dog/Jump (5).png';
import dogJump6 from '../assets/spriteSheets/dog/Jump (6).png';
import dogJump7 from '../assets/spriteSheets/dog/Jump (7).png';
import dogJump8 from '../assets/spriteSheets/dog/Jump (8).png';

import dogRun1 from '../assets/spriteSheets/dog/Run (1).png';
import dogRun2 from '../assets/spriteSheets/dog/Run (2).png';
import dogRun3 from '../assets/spriteSheets/dog/Run (3).png';
import dogRun4 from '../assets/spriteSheets/dog/Run (4).png';
import dogRun5 from '../assets/spriteSheets/dog/Run (5).png';
import dogRun6 from '../assets/spriteSheets/dog/Run (6).png';
import dogRun7 from '../assets/spriteSheets/dog/Run (7).png';
import dogRun8 from '../assets/spriteSheets/dog/Run (8).png';

import dogSlide1 from '../assets/spriteSheets/dog/Slide (1).png';
import dogSlide2 from '../assets/spriteSheets/dog/Slide (2).png';
import dogSlide3 from '../assets/spriteSheets/dog/Slide (3).png';
import dogSlide4 from '../assets/spriteSheets/dog/Slide (4).png';
import dogSlide5 from '../assets/spriteSheets/dog/Slide (5).png';
import dogSlide6 from '../assets/spriteSheets/dog/Slide (6).png';
import dogSlide7 from '../assets/spriteSheets/dog/Slide (7).png';
import dogSlide8 from '../assets/spriteSheets/dog/Slide (8).png';
import dogSlide9 from '../assets/spriteSheets/dog/Slide (9).png';
import dogSlide10 from '../assets/spriteSheets/dog/Slide (10).png';



const catWalk = [catWalk1, catWalk2, catWalk3, catWalk4, catWalk5, catWalk6, catWalk7, catWalk8, catWalk9, catWalk10];
const catIdle = [catIdle1, catIdle2, catIdle3, catIdle4, catIdle5, catIdle6, catIdle7, catIdle8, catIdle9, catIdle10];
const catFall = [catFall1, catFall2, catFall3, catFall4, catFall5, catFall6, catFall7, catFall8];
const catHurt = [catHurt1, catHurt2, catHurt3, catHurt4, catHurt5, catHurt6, catHurt7, catHurt8, catHurt9, catHurt10];
const catDead = [catDead1, catDead2, catDead3, catDead4, catDead5, catDead6, catDead7, catDead8, catDead9, catDead10];
const catJump = [catJump1, catJump2, catJump3, catJump4, catJump5, catJump6, catJump7, catJump8];
const catRun = [catRun1, catRun2, catRun3, catRun4, catRun5, catRun6, catRun7, catRun8];
const catSlide = [catSlide1, catSlide2, catSlide3, catSlide4, catSlide5, catSlide6, catSlide7, catSlide8, catSlide9, catSlide10];

const dogWalk = [dogWalk1, dogWalk2, dogWalk3, dogWalk4, dogWalk5, dogWalk6, dogWalk7, dogWalk8, dogWalk9, dogWalk10];
const dogIdle = [dogIdle1, dogIdle2, dogIdle3, dogIdle4, dogIdle5, dogIdle6, dogIdle7, dogIdle8, dogIdle9, dogIdle10];
const dogFall = [dogFall1, dogFall2, dogFall3, dogFall4, dogFall5, dogFall6, dogFall7, dogFall8];
const dogHurt = [dogHurt1, dogHurt2, dogHurt3, dogHurt4, dogHurt5, dogHurt6, dogHurt7, dogHurt8, dogHurt9, dogHurt10];
const dogDead = [dogDead1, dogDead2, dogDead3, dogDead4, dogDead5, dogDead6, dogDead7, dogDead8, dogDead9, dogDead10];
const dogJump = [dogJump1, dogJump2, dogJump3, dogJump4, dogJump5, dogJump6, dogJump7, dogJump8];
const dogRun = [dogRun1, dogRun2, dogRun3, dogRun4, dogRun5, dogRun6, dogRun7, dogRun8];
const dogSlide = [dogSlide1, dogSlide2, dogSlide3, dogSlide4, dogSlide5, dogSlide6, dogSlide7, dogSlide8, dogSlide9, dogSlide10];

const PetAnimation = ( { pet, animation }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const frames = getFrames(pet.type, animation);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
        }, 100); // Change frame every 100ms
        return () => clearInterval(interval);


    }, [frames]);
    return (
        <div>
            <img src={frames[currentFrame]} alt={`${pet.type} ${animation}`} className='dashboardCat' />
        </div>
    );
    
};

function getFrames(type, animation) {
    if (type === 'Cat') {
        if (animation === 'Walk') return catWalk;
        if (animation === 'Idle') return catIdle;
        if (animation === 'Fall') return catFall;
        if (animation === 'Hurt') return catHurt;
        if (animation === 'Dead') return catDead;
        if (animation === 'Jump') return catJump;
        if (animation === 'Run') return catRun;
        if (animation === 'Slide') return catSlide;
    }
    if (type === 'Dog') {
        if (animation === 'Walk') return dogWalk;
        if (animation === 'Idle') return dogIdle;
        if (animation === 'Fall') return dogFall;
        if (animation === 'Hurt') return dogHurt;
        if (animation === 'Dead') return dogDead;
        if (animation === 'Jump') return dogJump;
        if (animation === 'Run') return dogRun;
        if (animation === 'Slide') return dogSlide;
    }
    return catWalk; // default
}
export default PetAnimation;