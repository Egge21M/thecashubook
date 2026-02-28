# Part II — Building Blocks (Developer Core)

## 4) Protocol Primitives
4.1 Design goals and constraints  
4.2 Blind signatures in Cashu (practical intuition)  
4.3 Objects and terminology: proofs, outputs, promises, keysets  
4.4 Denominations and amount decomposition  
4.5 Keysets, keyset IDs, and rotation strategy  
4.6 Mint quote lifecycle (mint quote vs melt quote)  
4.7 State transitions of proofs (unspent → pending → spent)  
4.8 Token formats and serialization concerns  
4.9 Deterministic vs random splitting strategies  
4.10 Handling fees and rounding behavior  
4.11 Failure modes in primitive operations  
4.12 Developer checklist: primitives implemented correctly

## 5) Mint API Deep Dive
5.1 API surface overview and NUT mapping  
5.2 Authentication and trust assumptions  
5.3 Mint flow end-to-end (`request quote` → `pay` → `mint`)  
5.4 Melt flow end-to-end (`request melt` → `pay invoice` → `settle`)  
5.5 Swap/split flow for proof management  
5.6 Restoring wallet state from mint APIs  
5.7 Error model and status codes  
5.8 Idempotency keys and duplicate request safety  
5.9 Pagination, rate limits, and backoff strategy  
5.10 Version negotiation and backwards compatibility  
5.11 Testing against multiple mints  
5.12 Reference client architecture for API adapters

## 6) Wallet Architecture
6.1 Wallet roles: signer, store, transport, policy engine  
6.2 Local data model (proof table, keyset table, mint table, tx log)  
6.3 Coin/proof selection algorithms (smallest-set, privacy-aware, fee-aware)  
6.4 Change handling and token fragmentation control  
6.5 Multi-mint wallet design and routing rules  
6.6 Backup and recovery: what must be backed up vs reconstructed  
6.7 Seed management and secure key material handling  
6.8 State sync across devices (conflict resolution model)  
6.9 UX implications of async settlement and pending states  
6.10 Offline receive/send considerations  
6.11 Plugin interfaces for app integrations (LNURL, Nostr, API keys)  
6.12 Wallet architecture checklist + anti-patterns

## 7) Lightning Integration
7.1 Why Lightning is the settlement rail for Cashu today  
7.2 Invoice creation and quote coupling  
7.3 Melt execution with fee reserve handling  
7.4 Fee estimation models and user-facing fee UX  
7.5 Timeout, expiry, and retry strategy  
7.6 HTLC edge cases and partial failure handling  
7.7 Reconciliation after uncertain outcomes  
7.8 Handling stuck/pending melts safely  
7.9 BOLT11 vs future payment formats considerations  
7.10 LN node architecture options (LND/CLN/LNbits/etc.)  
7.11 Operational metrics for LN-Cashu bridges  
7.12 Lightning integration checklist + test matrix

## 8) Security Engineering
8.1 Threat model by component (mint, wallet, transport, operator)  
8.2 Double-spend detection and proof invalidation logic  
8.3 Replay and race-condition protections  
8.4 Secure randomness and nonce generation  
8.5 Key management at the mint (HSM, hot/cold separation, rotation)  
8.6 Abuse prevention: rate limits, quotas, anomaly detection  
8.7 DoS resilience and graceful degradation  
8.8 Secure API design (auth, signatures, anti-CSRF where relevant)  
8.9 Database integrity and audit logging  
8.10 Incident response playbook for mint operators  
8.11 Security testing: fuzzing, property tests, adversarial simulations  
8.12 Security checklist for launch readiness

## 9) Privacy Engineering
9.1 Privacy goals and realistic limits in custodial ecash  
9.2 Metadata leakage map (IP, timing, amounts, mint linkage)  
9.3 Amount-correlation and denomination analysis risks  
9.4 Timing-correlation attacks and mitigation patterns  
9.5 Network privacy (Tor, proxies, endpoint segregation)  
9.6 Wallet-side privacy heuristics for proof selection/splitting  
9.7 Multi-mint strategy as a privacy control  
9.8 Backup/recovery tradeoffs vs privacy  
9.9 Logging minimization for mints and clients  
9.10 Privacy-preserving analytics patterns  
9.11 Communicating privacy guarantees honestly to users  
9.12 Privacy checklist by role (wallet dev, mint operator, app integrator)

## 10) Interoperability & Standards
10.1 Standards landscape and why NUTs matter  
10.2 Core NUTs every developer should implement first  
10.3 Optional NUTs and feature negotiation strategy  
10.4 Capability discovery and graceful fallback behavior  
10.5 Compatibility testing across heterogeneous mints/wallets  
10.6 Versioning policy and deprecation lifecycle  
10.7 Extension design: when to propose a NUT vs private extension  
10.8 Interop test vectors and conformance suites  
10.9 Migration strategies during protocol evolution  
10.10 Documentation contracts for third-party integrators  
10.11 Governance and community process around standards  
10.12 Interoperability checklist before shipping
