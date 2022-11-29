import { ISection } from '../interfaces';

export const Section = ({ title, children }: ISection) => {
    return (
    <div className='section'>
        { title && <h2>{title}</h2> }
        {children} 
    </div>
    )
}