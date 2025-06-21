import React from 'react'
import Tag from './Tag'
import Button from './Button'
import { FaGithub } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import Link from 'next/link';
import { LuTarget } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import ContributersIcon from './ContributersIcon';
import { FaDiscord } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const page = () => {
  return (
        <main className='w-full h-full min-h-screen py-4'>
            <div className='w-full max-w-3xl mx-auto px-4 sm:p-12'>
                <section className='w-full flex flex-col items-center justify-center my-16'>
                    <h1 className='text-5xl sm:text-7xl'>
                      IndicTools
                    </h1>
                    <Tag className="mt-4 text-xs sm:text-sm">
                      Open-source Indian Language Technologies.
                    </Tag>
                    <p className='max-w-xl text-sm sm:text-lg text-center mt-8'>
                     {" We aim to unite developers, researchers, linguists, and enthusiasts to collaboratively solve meaningful, real-world problems in speech, translation, and natural language processing for Indic languages."}
                    </p>
                    <div className='actions flex justify-center items-center gap-4 mt-8'>
                        <Link href={"https://github.com/eSubhalekha/eSubhalekha"}>
                          <Button>
                          <FaGithub  /> Contribute
                          </Button>
                        </Link>
                        <Link href={"https://github.com/eSubhalekha/eSubhalekha"}>
                          <Button>
                            <SiGoogledocs /> Docs
                          </Button>
                         </Link>
                    </div>
                </section>
                <section className='w-full flex flex-col items-center justify-center my-16'>
                      <h2>
                        Contributers
                      </h2>
                      <div className='flex justify-center items-center mt-4 gap-x-2'>
                          <ContributersIcon />
                          <ContributersIcon />
                          <ContributersIcon />
                      </div>
                </section>
                <section className='flex flex-col items-start justify-start mt-24 '>
                   
                    <h2 className='text-2xl font-bold py-4 flex gap-2 items-center justify-center'>
                     {/* <LuTarget />  */}
                     🚀  Mission
                    </h2>
                    <p className='max-w-2xl text-lg text-start'>
                      {"To establish an open, inclusive, and problem-driven platform where contributors from diverse backgrounds can:"}
                    </p>
                    <ol className='max-w-xl w-full list-disc text-xl mt-8 pl-8 space-y-4'>
                      <li>
                        Propose new challenges
                      </li>
                      <li>
                        Solve existing ones
                      </li>
                      <li>
                        Build shared tools and frameworks
                      </li>
                      <li>
                        Advance the ecosystem of Indian language technologies
                      </li>
                    </ol>
                </section>
                <section className='flex flex-col items-start justify-start my-16 '>
                    <h2 className='text-2xl font-bold py-4 flex gap-2 items-center justify-center'>
                     {/* <LuPencil />  */}
                     🔍  Open Problems
                    </h2>
                    <p className='max-w-2xl text-lg text-start'>
                     {" To establish an open, inclusive, and problem-driven platform where contributors from diverse backgrounds can:"}
                    </p>
                    <ol className='max-w-xl w-full list-disc text-xl mt-8 pl-8 space-y-4'>
                      <li>
                        Anyone to submit new problems 
                      </li>
                      <li>
                      {"  Community members to explore, discuss, and solve these challenges"} 
                      </li>
                      <li>
                      {" Flexible levels of contribution—research, engineering, design, or documentation"}
                      </li>
                    </ol>
                    
                </section>
                <section className='flex flex-col items-start justify-start my-16 '>
                    <h2 className='text-2xl font-bold py-4 flex gap-2 items-center justify-center'>
                      🧩  FlagshipProblems
                    </h2>
                    <p className='max-w-2xl text-lg text-start'>
                      To establish an open, inclusive, and problem-driven platform where contributors from diverse backgrounds can:
                    </p>
                    <ol className='max-w-2xl w-full list-decimal text-xl mt-8 px-4 space-y-28'>
                      <li className='w-full'>
                         <div className='flex flex-col justify-start items-start'>
                            <h2 className='text-2xl font-bold py-4  items-center justify-center'>
                                <span> 🗣️ CoTrans</span><span className='font-light text-wrap pl-2'>- Colloquial Translation for Indian Languages</span>
                            </h2>
                            <p className='max-w-2xl text-lg text-start'>
                                    CoTrans is a machine translation project focused on colloquial, spoken, dialectal, and emotion-rich communication across Indian languages.
                            </p>
                            <ol className='max-w-xl w-full list-disc text-xl mt-8 sm:pl-8 space-y-4'>
                              <li>
                               <p>
                                <span className='font-semibold'>
                                  {"CoTrans-Pilot :"}
                                </span>
                                <span className=''>
                                  {" "}{"Initial MVP trained on small-scale, expressive, domain-rich datasets"}
                                </span>
                               </p>
                              </li>
                              <li>
                                <p>
                                  <span className='font-semibold'>
                                    CoTrans :
                                  </span>
                                  <span className=''>
                                    {" "}Full-scale Indic-to-Indic and Indic-to-English translation engine, optimized for real-world conversational use
                                  </span>
                                </p>
                                </li>
                            </ol>
                            <h2 className='text-xl font-bold py-4 flex gap-2 items-center justify-center mt-4'>
                                  Focus Areas:
                            </h2>
                            <ol className='max-w-xl w-full list-disc text-lg pl-8 space-y-2'>
                              <li>
                                Dialectal diversity 
                              </li>
                              <li>
                                Code-mixed and Romanized input
                              </li>
                              <li>
                                Emotionally expressive content 
                              </li>
                              <li>
                                {`Domain-specific commands (e.g., UMANG, BigBasket, Alexa)`}
                              </li>
                            </ol>
                         </div>
                      </li>
                      <li>
                          <div className='flex flex-col justify-start items-start'>
                            <h2 className='text-2xl font-bold py-4 flex gap-2 items-center justify-center'>
                                <span> 🎙️ RSML</span><span className='font-light text-wrap'>- Rich Speech Markup Language</span>
                            </h2>
                            <p className='max-w-2xl text-lg text-start'>
                                    {"RSML is a markup language specification designed to annotate expressive characteristics in speech such as:"}
                            </p>
                            <ol className='max-w-xl w-full text-lg list-disc pl-24 mt-4 '>
                              <li>
                                Prosody 
                              </li>
                              <li>
                                Intonation
                              </li>
                              <li>
                                Emotions  
                              </li>
                              <li>
                                Regional accents 
                              </li>
                              <li>
                                Pauses and emphasis
                              </li>
                            </ol>
                            <ol className='max-w-xl w-full list-disc text-xl mt-8 pl-8 space-y-4'>
                              <li>
                               <p>
                                <span className='font-semibold'>
                                  RSML-Beta :
                                </span>
                                <span className='text-lg'>
                                  {" "}Early-stage schema and use-cases in TTS and speech corpora
                                </span>
                               </p>
                              </li>
                              <li>
                                <p>
                                  <span className='font-semibold'>
                                    RSML :
                                  </span>
                                  <span className=''>
                                    {" "}Final extensible community standard
                                  </span>
                                </p>
                                </li>
                            </ol>
                            <h2 className='text-xl font-bold py-4 flex gap-2 items-center justify-center mt-4'>
                                  Use Cases:
                            </h2>
                            <ol className='max-w-xl w-full list-disc text-lg pl-8 space-y-2'>
                              <li>
                                Expressive Text-to-Speech {"(TTS)"} systems  
                              </li>
                              <li>
                                Speech synthesis training datasets
                              </li>
                              <li>
                                Multimodal speech markup for annotation platforms
                              </li>
                            </ol>
                         </div>
                      </li>
                      <li>
                          <div className='flex flex-col justify-start items-start px-6'>
                            <h2 className='text-2xl font-bold py-4 gap-2 items-center justify-center'>
                                <span> 🧠 Freedom Learning </span><span className='font-light text-wrap'>- A Meta-Learning Framework for Adaptive Intelligence</span>
                            </h2>
                            <p className='max-w-2xl text-lg text-start'>
                                {"Freedom Learning is a meta-learning framework that models how intelligent systems—biological or artificial—can *learn to learn* by exploring structured combinations and refining them before conventional training begins."}
                            </p>
                            <ol className='max-w-2xl w-full text-lg list-decimal pl-8 mt-4 '>
                              <li>
                                <div>
                                  <h2 className='text-xl font-bold pt-4 gap-2 items-center justify-center'>
                                    {"Combinatorial Exploration of Freedom Space (CFS)"}
                                  </h2>
                                   <ol className='list-disc pl-8 my-4 '>
                                      <li >
                                        {"Enumerate all logically valid combinations within a constrained *freedom space* (e.g., phonemes, swaras, grammar rules)."}
                                      </li>
                                      <li >
                                        {"Builds internal structure based on possibilities, not pre-existing data."}
                                      </li>
                                    </ol>
                                </div>
                              </li>
                               <li>
                                <div>
                                  <h2 className='text-xl font-bold py-4 gap-2 items-center justify-center'>
                                    {"Reinforcement Learning (RL)"}
                                  </h2>
                                   <ol className='list-disc pl-8 my-4 '>
                                      <li >
                                        {"Prune and discard unproductive or invalid combinations using feedback or heuristics."}
                                      </li>
                                      <li >
                                        {"This reduces noise and focuses the learning space."}
                                      </li>
                                    </ol>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h2 className='text-xl font-bold py-4 gap-2 items-center justify-center'>
                                    {"Machine Learning (ML)"}
                                  </h2>
                                   <ol className='list-disc pl-8 my-4 '>
                                      <li >
                                        {"Train models on the refined space to generalize and expand knowledge efficiently."}
                                      </li>
                                      <li >
                                        {"Can be paired with deep learning, few-shot learning, or symbolic reasoning."}
                                      </li>
                                    </ol>
                                </div>
                              </li>
                            </ol>
                            <h2 className='text-xl font-bold py-4 flex gap-2 items-center justify-center mt-4'>
                                  Application
                            </h2>
                            <ol className='max-w-xl w-full list-disc text-lg pl-8 space-y-2'>
                              <li>
                                  {"Grammar induction for Sanskrit and Indian languages"}
                              </li>
                              <li>
                                {"Swara-TTS (singing TTS from Carnatic alapanas)"}
                              </li>
                              <li>
                                {"Meta-learners for prosody and expressive speech synthesis "}
                              </li>
                              <li>
                                {"Pre-training for speech/language/music models in low-resource settings"}
                              </li>
                            </ol>
                         </div>
                      </li>
                    </ol>
                </section>
                <section className="bg-[var(--foreground)] text-[var(--background)] py-12 px-6 md:px-12 rounded-2xl shadow-lg w-full max-w-4xl mx-auto text-center space-y-6 my-8">
                  <h2 className="text-3xl font-bold">Start Contributing</h2>
                  <p className="text-lg">
                   {` Whether you're a student, researcher, or enthusiast — you can drive change.  
                    Contribute problems, build tools, or host sprints to shape the future of Indian Language AI.`}
                  </p>
                  <Button className="bg-black text-white text-lg rounded-full hover:bg-gray-900 transition">
                    <FaGithub  /> Contribute Now
                  </Button>
                </section>
                <section className="bg-[var(--background)] text-[var(--foreground)] py-12 px-6 md:px-12 rounded-2xl shadow-lg w-full max-w-4xl mx-auto text-center space-y-6 mt-4 border-1 border-gray-800 my-16">
                  <h2 className="text-3xl font-bold">Community</h2>
                  <p className="text-lg">
                    {"We’re building IndicTools in the open — with you. Whether you're here to contribute code, suggest ideas, ask questions, or just stay in the loop, there's a place for you in our community. Join us on Discord, start a discussion on GitHub, or subscribe to stay updated."}
                  </p>
                  <div className='flex items-center justify-center gap-x-4'>
                    <Button className="text-lg ">
                      <FaDiscord /> Discord
                    </Button>
                    <Button className="text-lg">
                      <RiMoneyDollarCircleFill /> Fund
                    </Button>
                  </div>
                </section>
                
            </div>
        </main>
  )
}

export default page