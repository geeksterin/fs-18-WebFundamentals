/* eslint-disable react/prop-types */

function SendEmailForm({ handleEmailSubmit, email, uuid, setEmail, setUUID }) {
  return (
    <>
      <h3>Send File By Email</h3>
      <form action="" onSubmit={handleEmailSubmit}>
        <input
          type="text"
          placeholder="Recipient's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="File UUID"
          value={uuid}
          onChange={(e) => setUUID(e.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
    </>
  );
}

export default SendEmailForm;
