import React, {useEffect, useState} from 'react';
import {rmuCharacterCreatorApi} from "./RmuCharacterCreatorApi.js";

const SkillCosts = ({profession}) => {
    const [skillCosts, setSkillCosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkillCosts = async () => {
            try {
                const response = await rmuCharacterCreatorApi.getSkillCost(profession);
                setSkillCosts(response.data);
                setLoading(false);
                console.log("data: ", skillCosts)
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchSkillCosts();
    }, [profession]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Skill Costs for {profession}</h2>
            <ul>
                {skillCosts.map((cost, index) => (
                    <li key={index}>
                        {cost.skill}: {cost.cost}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCosts;
