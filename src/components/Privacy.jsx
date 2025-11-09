function Privacy() {
  return (
    <section id="privacy" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
        <p className="mt-3 text-gray-600">We value your privacy. Here's a concise summary:</p>
        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <p>• We collect only the information needed to create and secure your account (username, email, role).</p>
          <p>• Passwords are stored using strong, industry-standard hashing. We never store them in plain text.</p>
          <p>• Access to your data is restricted based on your role and explicit permissions.</p>
          <p>• You can request data export or deletion at any time by contacting support.</p>
          <p>• We use cookies to keep you signed in and to improve your experience. You can opt out in settings.</p>
        </div>
        <p className="mt-6 text-xs text-gray-500">This summary is for convenience only. Contact support for the full policy.</p>
      </div>
    </section>
  );
}

export default Privacy;
