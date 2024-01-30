import { GptMessage, MyMessage, TypingLoader } from "../../components";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-20">
          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />
          <MyMessage text="Hola Mundo" />

          <TypingLoader className="fade-in" />
        </div>
      </div>
    </div>
  );
};
