
import {HeroContainer,Title,Description,Image,Content} from './HeroSectionElements'

const HeroSection = () => {

    return (
        <>
            <HeroContainer>
                    
                <Image src={`https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80`}>
                        
                </Image>
                
                <Content>
                        
                    <Title>
                       Have Fun EveryWhere!!!
                    </Title>
                    <Description>
                       
                    </Description>

                </Content>
   
            </HeroContainer>    
           
        </>
    )
}

export default HeroSection
