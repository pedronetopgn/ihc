
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  LongPressGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ContainerRetangulo = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ECC858;
`;

const Retangulo = styled.ScrollView`
  flex: 1;
  padding: 10px;
  width: 350px;
`;

const ContainerBotoes = styled.View`
  flex: 1;
  background-color: #CCC;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Botao = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background-color: #000;
  border-radius: 10px;
`;

export default () => {

  const [atividade, setAtividade] = useState('');

  doubleTapRef = React.createRef();

  const handleBotao = (numberOfTaps) => {
    console.log(numberOfTaps);
    setAtividade('Botão Pressionado\n'+atividade);
    console.log(atividade);
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm being pressed for so long");
    }
  };

  return (
    <Page>
      <ContainerBotoes>
        <LongPressGestureHandler
          onHandlerStateChange={this._onHandlerStateChange}
          minDurationMs={800}
          >
          <TapGestureHandler
            onHandlerStateChange={this._onSingleTap}
            waitFor={this.doubleTapRef}>
            <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>
              <Botao
              onPress={handleBotao}/>
            </TapGestureHandler>
          </TapGestureHandler>
        </LongPressGestureHandler>
      </ContainerBotoes>
      <ContainerRetangulo>
        <Retangulo fadingEdgeLength={100}>
          <Text>Ações Feitas:</Text>
          <Text>{atividade}</Text>
        </Retangulo>
      </ContainerRetangulo>
      
    </Page>
  );
}
