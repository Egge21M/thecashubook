# Chapter 4 — Protocol Primitives

## Reader Outcome

By the end of this chapter, the reader can reason about core Cashu objects and implement primitive operations safely.

## 4.1 Design goals and constraints

Cashu’s protocol primitives are best understood as an engineering compromise: maximize practical usability and privacy, while staying simple enough that developers can build reliable systems quickly.

At a high level, Cashu primitives optimize for four things.

First, **simplicity**. Wallets and mints should be able to implement core flows without a massive cryptographic surface area. The protocol intentionally centers a small set of objects and predictable operations.

Second, **offline transferability**. Cashu tokens behave like bearer instruments: users can pass value wallet-to-wallet without requiring immediate online mint interaction for every handoff.

Third, **practical privacy**. With blind signatures, the mint can authorize value without seeing the underlying token secret at issuance time. That blocks direct issuance-to-redemption linkage at the token level.

Fourth, **Bitcoin-native settlement**. Issuance and redemption are grounded in Bitcoin/Lightning payment rails, which keeps Cashu tightly connected to BTC liquidity and real payment infrastructure.

Just as important: these primitives have clear limits.

Cashu is **not trustless like on-chain Bitcoin**. Users rely on mint honesty/solvency and mint availability. Cashu is also **not automatically metadata-private**: timing, amount patterns, network identifiers, and client behavior can still leak information if implementation and operations are careless.

Design is also constrained by Lightning realities. Quotes can expire, routing can fail, fees vary, and liquidity is uneven. These constraints affect wallet UX and protocol strategy (proof splitting, consolidation, retries, and fallback behavior). On top of that, mints must prevent double spends by tracking spent secrets, and wallets must safely handle keyset rotation.

So the chapter should be read with this mindset: Cashu primitives are not trying to solve every problem at once. They provide a compact foundation that gives developers strong building blocks for private, usable ecash systems under explicit trust and operational assumptions.

With that frame in place, we can now look at the most important primitive in the stack: blind signatures.

## 4.2 Blind signatures in Cashu (practical intuition)

Blind signatures are one of Cashu’s core building blocks. They allow the mint to sign value for a user without learning the secret that identifies the token later.

A normal digital signature proves that a signer approved a specific message. The tradeoff is that the signer sees that message. In Cashu, that would be a privacy disaster: if the mint saw every token secret at issuance time, it could later recognize those same secrets when tokens are redeemed and link issuance to spend.

Blind signatures solve this by adding a blinding step in the wallet:

1. The wallet prepares token secrets and blinds them (cryptographically masks them).
2. The mint signs the blinded data.
3. The wallet unblinds the signature and obtains a valid signature over the original secret.

The result is still a normal, verifiable signature from the mint—but the mint never saw the unblinded secret during issuance.

Important nuance: blindness protects token-level linkability, not all metadata. The mint can still observe network timing, quote/payment correlation, amount patterns, and client behavior. So blind signatures are necessary for Cashu privacy, but they are not sufficient on their own.

For wallet builders, this has practical consequences: keep blinding logic local, avoid deterministic patterns that leak metadata, and treat issuance flow and transport privacy as first-class concerns—not just signature correctness.

### Protocol-level blinding flow (compact)

For completeness, here is the protocol-level view of the classic blind-signature flow used in Cashu:

1. **Mint key publication**
   - Bob (mint) publishes public key: **K = kG**

2. **Wallet secret preparation**
   - Alice picks secret **x**
   - Alice computes **Y = hash_to_curve(x)**

3. **Blinding**
   - Alice samples random blinding factor **r**
   - Alice sends blinded point to Bob: **B\_ = Y + rG**

4. **Signing (blind domain)**
   - Bob signs blinded point and returns: \__C_ = kB\_\*\*
   - (This can be viewed as the core DH-style step in the flow.)

5. **Unblinding**
   - Alice computes:
   - **C\_ - rK = kY + krG - krG = kY = C**

6. **Token form**
   - Alice now holds token material as pair: **(x, C)**

7. **Verification at spend**
   - On redemption, Bob verifies:
   - **k · hash_to_curve(x) == C**
   - If valid and **x** is not already spent, Bob accepts it and records **x** in the spent-secret set.

This chapter stays implementation-focused, but if you want the formal spec language and exact notation, read **NUT-00** in the Cashu protocol specifications.

## 4.3 Objects and terminology: proofs, outputs, promises, keysets

**Draft notes**

- Define each object in developer terms.
- Show object lifecycle handoff between wallet and mint.
- Include one compact object relationship diagram (later in `reference/`).

## 4.4 Denominations and amount decomposition

**Draft notes**

- Why decomposition exists and how it affects spendability.
- Tradeoffs between larger vs smaller proof sets.
- Practical decomposition strategy choices.

---

## Implementation notes (chapter-level)

- Inputs: mint pubkeys/keysets, requested amounts, existing proofs.
- Outputs: newly minted proofs, swapped proofs, spend bundles.
- State transitions: unspent → pending → spent (and recovery edge-cases).

## Minimal flow (pseudocode)

```text
request_mint_quote(amount)
pay_quote_over_lightning()
blinded_messages = wallet.create_blinded_outputs(amount)
promises = mint.sign_blinded_outputs(blinded_messages)
proofs = wallet.unblind(promises)
store(proofs)
```

## Common failure modes

1. Keyset mismatch during mint/swap
   - Symptom: proof validation fails.
   - Root cause: stale keyset cache.
   - Mitigation: refresh active keysets + retry safely.

2. Over-fragmented proofs
   - Symptom: frequent swaps/fee overhead.
   - Root cause: poor split strategy.
   - Mitigation: controlled denomination policy and consolidation.

## Checklist

- [ ] 4.1–4.4 drafted fully
- [ ] Add one glossary callout per subsection
- [ ] Add at least one concrete edge-case example
- [ ] Link to Chapter 5 API mapping

## Open questions

- Which decomposition default should we recommend for beginner wallet builders?
- Should we present deterministic splitting before random splitting, or vice versa?
