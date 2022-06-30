// 앞에서 작성한 컴포넌트를 불러옵니다.
import Title from "./Title";

// title : 컴포넌트 이름으로, '/'를 넣어 카테고리화 할 수 있습니다.
//         이후 예시에서 조금 더 자세히 설명합니다.
// component : 어떤 컴포넌트를 가져와서 스토리로 만들 것인지 명시합니다.
// argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 정해줍니다.
//            지금은 title, textColor이라는 전달인자에 text 타입이 필요함을 의미합니다.
export default {
    title: "Practice/Title", 
    component: Title,
    argTypes: {
        title: { control: "text" },
        textColor: {control: "text"}
    }
}

// 템플릿을 만들어줍니다. 이 템플릿에서는
// Title 컴포넌트가 args를 전달받아 props로 내려줍니다.
const Template = (args) => <Title {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성합니다.
// 템플릿을 사용하여 Storybook에 넣어줄 스토리를 하나 만들어주었습니다.
// Template.bins({}); 는 정해진 문법이라고 생각하고 사용하시면 됩니다.
export const RedTitle = Template.bind({});

// 만들어준 스토리의 전달인자를 작성해줍니다.
RedTitle.args= {
    title: "Red Title",
    textColor: "red"
}

// 스토리를 하나 더 만듭니다.
export const BlueTitle = Template.bind({});

// 스토리의 전달인자를 작성해줍니다.
BlueTitle.args= {
    title: "Blue Title",
    textColor: "blue"
}

export const StorybookTitle = (args) =>{
    return <Title {...args} />
}