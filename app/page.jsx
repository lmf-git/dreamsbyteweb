'use client';

import Hero from '../components/specific/landing/Hero/Hero';
import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";
import Comparison from "../components/specific/landing/Comparison/Comparison";

export default function Index() {
    return (
        <>
            <Hero />
            <Testimonials />
            <Comparison />
            <Services />
        </>
    );
};
