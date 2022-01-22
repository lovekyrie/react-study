import React from "react";

//dialog作为容易不关心内容和逻辑
//等同于vue的slot

function Dialog(props) {
  return (
    <div style={{ border: `1px solid ${props.color || "blue"}` }}>
      {props.children}
      <div className="footer">{props.footer}</div>
    </div>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog {...props}>
      <h1>欢迎光临</h1>
      <p>感谢使用React</p>
    </Dialog>
  );
}

const Api = {
  getUser() {
    return { name: "jerry", age: 20 };
  },
};

function Fetcher(props) {
  const user = Api[props.name]();
  return props.children(user);
}

function Filter({ children, type }) {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type !== type) {
          return;
        }
        return child;
      })}
    </div>
  );
}

function RadioGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        //vdom不可更改，需要克隆一个才能
        return React.cloneElement(child, { name: props.name });
      })}
    </div>
  );
}

function Radio({ children, ...rest }) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  );
}

export default function Compostion() {
  const footer = (
    <button
      onClick={() => {
        alert("确定！");
      }}
    >
      确定
    </button>
  );

  return (
    <div>
      <WelcomeDialog color="green" footer={footer} />
      <Fetcher name="getUser">
        {({ name, age }) => (
          <p>
            {name}-{age}
          </p>
        )}
      </Fetcher>
      <Filter type="p">
        <h1>react</h1>
        <p>react很不错</p>
        <h1>vue</h1>
        <p>vue很不错</p>
      </Filter>
      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="react">react</Radio>
        <Radio value="angular">angular</Radio>
      </RadioGroup>
    </div>
  );
}
