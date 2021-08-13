import styled from 'styled-components'
import page1 from '../../../assets/pages/page-1.jpeg'
const StyledPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${page1});
    background-size: cover;
    background-position: -250px center;
    display: flex;
    align-items: flex-start;
    color: white;
    #text {
        padding: 8.25rem 1rem;
        padding-bottom: 1rem;
        text-transform: uppercase;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-image: linear-gradient(to bottom, rgba(0,0,0,.3), transparent);
            z-index: 0;
        }
        h4 {
            font-weight: 200;
            position: relative;
            z-index: 2;
            opacity: .85;
        }
        h1 {
            position: relative;
            z-index: 2;
        }
        button {
            margin-top: 1.5rem;
            background: none;
            border: 2px solid white;
            padding: 1.25rem 3.5rem;
            position: relative;
            z-index: 2;
            text-transform: uppercase;
        }
    }
`
const Page = () => {
return (
<StyledPage>
    <div id="text">
        <h4>recent launch</h4>
        <h1>transporter-2 mission</h1>
        <button>rewatch</button>
    </div>
</StyledPage>
)
}
export default Page