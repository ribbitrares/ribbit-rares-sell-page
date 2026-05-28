import React, { useState } from "react";

const BUY_CATEGORIES = [
  "Vintage Pokémon Cards",
  "Modern Hits & Alt Arts",
  "PSA / CGC / BGS Graded Cards",
  "Binder Collections",
  "Sealed Product",
  "Bulk & Large Lots",
];

const STEPS = [
  {
    number: "01",
    title: "Upload Photos",
    text: "Send clear photos of binder pages, card fronts and backs, slabs, sealed product, or the full collection.",
  },
  {
    number: "02",
    title: "Get Reviewed",
    text: "Your collection is reviewed based on condition, authenticity, demand, resale value, and liquidity.",
  },
  {
    number: "03",
    title: "Get an Offer",
    text: "If the collection is a fit, you receive a clear offer with local pickup or shipped-deal options.",
  },
];

const TRUST_POINTS = [
  {
    title: "Straightforward Process",
    text: "Submit photos, share basic details, and get a clear response without a messy back-and-forth.",
  },
  {
    title: "Local & National Buying",
    text: "Local pickups and shipped collections are both available depending on deal size and value.",
  },
  {
    title: "All Collection Sizes",
    text: "Childhood binders, modern hits, slabs, sealed product, bulk, and full collections are all considered.",
  },
  {
    title: "Fast Initial Review",
    text: "Good photos and clear details help speed up the quote process and prevent wasted time.",
  },
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // PREVIEW MODE:
    // This shows the success screen only.
    //
    // LIVE FORM OPTION:
    // Replace this with your Jotform embed, Tally embed, or Formspree endpoint.
    // For a Pokémon buying business, Jotform is recommended because it handles
    // multiple photo uploads better than basic form tools.
    setSubmitted(true);
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files || []));
  };

  return (
    <main className="site">
      <section className="hero section">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Local & National Pokémon Collection Buyer</div>
            <h1>Sell Your Pokémon Card Collection for Cash</h1>
            <p className="lead">
              Get a fast review on vintage, modern, graded, raw, binder, sealed, bulk,
              and full Pokémon collections. Submit your photos and get the process started.
            </p>

            <div className="cta-row">
              <a hreff="https://form.jotform.com/261473708754061" className="button button-primary">target="_blank" rel="noreferrer"
                Start Free Collection Review
              </a>
              <a href="https://instagram.com/yourhandle" className="button button-secondary" target="_blank" rel="noreferrer">
                DM on Instagram
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>Upload</strong>
                <span>Photos directly</span>
              </div>
              <div>
                <strong>Review</strong>
                <span>Market-based quote</span>
              </div>
              <div>
                <strong>Sell</strong>
                <span>Local or shipped</span>
              </div>
            </div>
          </div>

          <div className="buy-card">
            <p className="mini-title">Currently Buying</p>
            <div className="category-list">
              {BUY_CATEGORIES.map((item) => (
                <div className="category" key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>How Selling Works</h2>
            <p>
              This page is built for sellers who want an easy, low-pressure way to get
              their collection reviewed.
            </p>
          </div>

          <div className="steps">
            {STEPS.map((step) => (
              <article className="card" key={step.title}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section form-section">
        <div className="container form-grid">
          <div>
            <div className="section-heading left">
              <h2>Why Sell Here?</h2>
              <p>
                Selling a Pokémon collection can feel messy. This process keeps it simple:
                submit the details, upload photos, and get a clear review without needing
                to know every card value yourself.
              </p>
            </div>

            <div className="trust-grid">
              {TRUST_POINTS.map((point) => (
                <article className="trust-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>

            <div className="notice">
              <strong>Best results:</strong> Upload clear photos of binder pages, closeups
              of valuable cards, graded slabs, sealed product, and any cards you believe
              are high value.
            </div>
          </div>

          <div className="form-card" id="quote-form">
            {submitted ? (
              <div className="success">
                <div className="success-icon">✓</div>
                <h2>Collection Submitted</h2>
                <p>
                  Your collection details were submitted. In live mode, this is where the
                  lead would be sent to your form backend.
                </p>
                <button className="button button-primary" onClick={() => setSubmitted(false)}>
                  Submit Another Collection
                </button>
              </div>
            ) : (
              <>
                <h2>Free Collection Review Form</h2>
                <p className="form-intro">
                  Upload photos and give the basic details. The better the photos, the
                  faster the review.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="field-row">
                    <label>
                      Name *
                      <input required name="name" placeholder="Your name" />
                    </label>
                    <label>
                      Phone or Email *
                      <input required name="contact" placeholder="Best contact method" />
                    </label>
                  </div>

                  <label>
                    Instagram or Facebook Handle
                    <input name="social_handle" placeholder="Optional, but helpful" />
                  </label>

                  <div className="field-row">
                    <label>
                      Local or Shipping? *
                      <select required name="selling_method" defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Local pickup</option>
                        <option>Shipping</option>
                        <option>Not sure yet</option>
                      </select>
                    </label>

                    <label>
                      Your Location *
                      <input required name="seller_location" placeholder="City / State" />
                    </label>
                  </div>

                  <label>
                    What are you selling? *
                    <select required name="collection_type" defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Vintage cards</option>
                      <option>Modern cards</option>
                      <option>Graded cards</option>
                      <option>Binder collection</option>
                      <option>Sealed product</option>
                      <option>Bulk cards</option>
                      <option>Full collection</option>
                      <option>Mixed collection</option>
                    </select>
                  </label>

                  <div className="field-row">
                    <label>
                      Approximate Collection Size
                      <input name="collection_size" placeholder="Example: 1 binder, 50 slabs, 5 boxes" />
                    </label>
                    <label>
                      Asking Price
                      <input name="asking_price" placeholder="Optional" />
                    </label>
                  </div>

                  <label>
                    Upload Photos *
                    <div className="upload-box">
                      <strong>Click to upload collection photos</strong>
                      <span>Binder pages, fronts/backs, slabs, sealed product, bulk boxes</span>
                      <input required type="file" multiple accept="image/*,.pdf" onChange={handleFileChange} />
                    </div>
                  </label>

                  {files.length > 0 && (
                    <div className="selected-files">
                      <strong>Selected files:</strong>
                      <ul>
                        {files.slice(0, 6).map((file) => (
                          <li key={file.name}>{file.name}</li>
                        ))}
                        {files.length > 6 && <li>+ {files.length - 6} more files</li>}
                      </ul>
                    </div>
                  )}

                  <label>
                    Collection Notes
                    <textarea
                      name="collection_notes"
                      rows="5"
                      placeholder="Condition, valuable cards, sealed items, how long you’ve had it, anything important."
                    />
                  </label>

                  <div className="disclaimer">
                    By submitting, you are requesting a collection review. Submission does
                    not guarantee an offer. Offers depend on condition, authenticity,
                    demand, and resale viability.
                  </div>

                  <button type="submit" className="button button-primary full-width">
                    Submit Collection for Review
                  </button>
                </form>

                <div className="social-row">
                  <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">IG DM</a>
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">Facebook Message</a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <div className="final-box">
            <h2>Have Pokémon Cards Sitting Around?</h2>
            <p>
              Whether it is an old childhood binder, a modern collection, sealed product,
              graded cards, or a full lot, submit photos and get it reviewed.
            </p>
            <a href="#quote-form" className="button button-primary">
              Start Free Collection Review
            </a>
          </div>
        </div>
      </section>

      <footer>
        Buying Pokémon card collections locally and nationally. Vintage, modern, graded,
        sealed, binders, bulk, and full collections.
      </footer>
    </main>
  );
}
