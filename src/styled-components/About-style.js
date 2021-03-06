import styled from 'styled-components'

const AboutStyle = {}

AboutStyle.Wrapper = styled.div`
padding-left: 36px;
padding-right: 36px;
width: 676px;
display: grid;
`;

AboutStyle.GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
`;

AboutStyle.GridItem = styled.div`
border: 1px;
`;

AboutStyle.InfoTitle = styled.div`
display: inline-block;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.InfoText = styled.div`
margin-right: 10px;
margin-bottom: 10px;
font-family: 'DINPro-Regular';
font-size: 13px;
`;

AboutStyle.InfoTextCEO = styled.div`
margin-right: 10px;
margin-bottom: 10px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.AboutTitle = styled.div`
float: left;
font-family: 'DINPro-Medium';
font-size: 26px;
`
AboutStyle.Show = styled.div`
float: right;
padding-top: 10px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

AboutStyle.AboutText = styled.div`
margin-bottom: 40px;
font-family: 'DINPro-Regular';
font-size: 16px;
`;

AboutStyle.Read = styled.span`
font-family: 'DINPro-Medium';
font-size: 13px;
`;

export default AboutStyle;