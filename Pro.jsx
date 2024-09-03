    import React from 'react';

    function ResearchProject({ title, description, requirements, alumniContact, expressInterest }) {
    return (
        <div className="bg-beige-200  p-6 shadow-md m-4">
        <h2 className="text-2xl font-mono mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <h3 className="text-lg font-mono mb-2">Requirements:</h3>
        <ul className="list-disc ml-6 text-gray-600">
            {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
            ))}
        </ul>
        <div className="mt-4">
            <p className="font-mono mb-1">Alumni Contact:</p>
            <p className="text-gray-600">{alumniContact}</p>
        </div>
        <button className="bg-beige-700 hover:bg-beige-200 text-grey font-bold py-2 px-4 rounded mt-4">{expressInterest}</button>
        </div>
    );
    }

    function App() {
    return (

        <div className="min-h-screen bg-beige-100 ">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-times  mb-8 mt-4">Browse Research Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResearchProject
            title="Improving Machine Learning Models"
            description="Looking for students with experience in data science and machine learning to help enhance the accuracy and performance of our predictive models."
            requirements={[
                'Strong background in machine learning and data preprocessing',
                'Proficiency in Python and popular ML libraries',
                'Experience with model evaluation and optimization',
            ]}
            alumniContact=<p> Dr. Emily Johnson <br/> emilyjohnson@university.edu </p>
            expressInterest="Express Interest"
            />
            <ResearchProject
            title="Developing a Mobile App Prototype"
            description="Seeking students with UI/UX design and mobile app development skills to help create a prototype for a new mobile application."
            requirements={[
                'Expertise in user interface design and prototyping',
                'Proficiency in mobile app development (iOS or Android)',
                'Experience with popular design and development tools',
            ]}
            alumniContact=<p> John Smith <br/> johnsmith@university.edu </p>
            expressInterest="Express Interest"
            />
            <ResearchProject
            title="Conducting Market Research"
            description="Looking for students with strong research and analytical skills to help gather and analyze data for a new market research project."
            requirements={[
                'Familiarity with market research methodologies',
                'Proficiency in data collection and analysis',
                'Experience with survey design and data visualization',
            ]}
            alumniContact=<p> Sarah Lee <br /> sarahlee@university.edu</p>
            aluminiCont
            expressInterest="Express Interest"
            />
        </div>
        </div>
        </div>
    );
    }

    export default App;
