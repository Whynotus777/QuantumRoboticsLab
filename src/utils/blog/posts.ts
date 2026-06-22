export type BlogSource = {
  title: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  image: string;
  excerpt: string;
  dek: string;
  readTime: string;
  highlights: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  sources: BlogSource[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ai-native-robotics-company-advantage',
    title: 'Why AI-Native Robotics Companies Will Compound Faster',
    date: 'October 15, 2025',
    isoDate: '2025-10-15',
    category: 'AI',
    image: '/assets/home/precision.svg',
    readTime: '6 min read',
    excerpt:
      'Robotics is shifting from hand-coded automation to learning systems. Companies built around data, simulation, and model iteration from day one have a structural advantage.',
    dek:
      'The next robotics winners will not be traditional hardware vendors with AI bolted on. They will be model-driven operators that treat every deployment as a source of reusable intelligence.',
    highlights: [
      'AI-native robotics companies learn from every deployment instead of restarting engineering work customer by customer.',
      'Simulation, teleoperation, and fleet data make the software loop as important as the mechanical bill of materials.',
      'The durable advantage is not a single model; it is the operating system for collecting, validating, and redeploying embodied data.',
    ],
    sections: [
      {
        heading: 'The robotics business model is changing',
        body: [
          'Industrial robotics used to reward companies that could design precise mechanisms, integrate them into a fixed workcell, and support that installation for years. That still matters, but the center of gravity is moving. Customers increasingly want robots that can be re-tasked, monitored remotely, improved after deployment, and taught through natural instructions rather than brittle custom code.',
          'That favors AI-native companies. If the company is built around perception data, simulation coverage, policy evaluation, and rapid model iteration, every pilot becomes part of the product. The same grasp failure, navigation edge case, or operator correction can improve future deployments across customers.',
        ],
      },
      {
        heading: 'Foundation models make the stack reusable',
        body: [
          'Recent robotics research frames the field as moving from fixed, single-task systems toward general-purpose agents that combine language, vision, action, planning, and cross-embodiment learning. That does not mean one model magically controls every machine. It means the reusable layer is getting larger: perception, task decomposition, common manipulation primitives, safety checks, and operator interfaces can be shared across robots.',
          'For a company like Quantum Robotics, the strategic implication is direct. The product should not only be a robot arm, drone, or mobile platform. It should be an embodied intelligence stack that gets better as the fleet grows.',
        ],
      },
      {
        heading: 'Data operations become the moat',
        body: [
          'The hardest part of robotics AI is not showing a demo. It is closing the loop from real-world error to corrected behavior. An AI-native robotics company needs infrastructure for logging sensor streams, labeling operator interventions, replaying failures in simulation, validating updated policies, and shipping improvements without breaking safety constraints.',
          'That loop is difficult for incumbents whose teams, contracts, and systems were built around one-off automation projects. Startups can make it the default operating rhythm. The result is compounding: deployment velocity improves, support cost falls, and each customer adds to the common intelligence layer.',
        ],
      },
    ],
    sources: [
      {
        title:
          'Foundation Models in Robotics: A Comprehensive Review of Methods, Models, Datasets, Challenges and Future Research Directions',
        url: 'https://arxiv.org/abs/2604.15395',
      },
      {
        title:
          'Embodied AI with Foundation Models for Mobile Service Robots: A Systematic Review',
        url: 'https://arxiv.org/abs/2505.20503',
      },
    ],
  },
  {
    slug: 'computer-vision-is-the-robot-interface',
    title: 'Computer Vision Is Becoming the Robot Interface',
    date: 'November 19, 2025',
    isoDate: '2025-11-19',
    category: 'Computer Vision',
    image: '/assets/blog/computer-vision-eye-unsplash.jpg',
    readTime: '5 min read',
    excerpt:
      'Vision is no longer just inspection. It is becoming the shared interface between humans, robots, workcells, and autonomy software.',
    dek:
      'As robots move into less structured environments, computer vision becomes the layer that turns messy physical scenes into decisions operators can trust.',
    highlights: [
      'Vision systems are moving from pass/fail inspection toward scene understanding and task context.',
      'Foundation vision models help robots generalize, but deployment still needs calibration, latency control, and failure monitoring.',
      'The best robotics interfaces will expose visual confidence and intent, not just raw camera feeds.',
    ],
    sections: [
      {
        heading: 'From inspection to situational awareness',
        body: [
          'Factory vision used to be narrow: detect a defect, read a barcode, measure a tolerance. Modern robotics needs more. A robot must understand where tools are, whether a human is near the work zone, whether an object is graspable, and whether the scene has drifted from what the task expects.',
          'That changes the role of computer vision from a sensor module into the primary interface for autonomy. The robot sees, reasons, acts, and explains through the same visual context.',
        ],
      },
      {
        heading: 'Foundation models help, but do not remove engineering',
        body: [
          'Vision foundation models trained on broad image distributions are beginning to capture useful structure about the visual world. Research comparing model behavior to human low-level vision suggests that some models align with human-like visual characteristics better than others, while still showing gaps in contrast sensitivity and frequency response.',
          'For robotics, the takeaway is practical. Foundation models can improve generalization, but production systems still need calibrated cameras, temporal consistency, uncertainty thresholds, and fallbacks when lighting, occlusion, vibration, or dust break assumptions.',
        ],
      },
      {
        heading: 'Interfaces should show intent',
        body: [
          'The operator does not need another wall of video feeds. The operator needs to know what the system believes, what it plans to do, and where confidence is low. That means overlays, semantic zones, annotated detections, and task-level status become part of the product.',
          "This is where AI-native robotics can feel different. The interface can be built around the model's reasoning loop rather than around raw hardware telemetry.",
        ],
      },
    ],
    sources: [
      {
        title:
          'Do computer vision foundation models learn the low-level characteristics of the human visual system?',
        url: 'https://arxiv.org/abs/2502.20256',
      },
      {
        title: 'FP3: A 3D Foundation Policy for Robotic Manipulation',
        url: 'https://arxiv.org/abs/2503.08950',
      },
    ],
  },
  {
    slug: 'humanoid-robot-stack-components',
    title: 'The Stack That Makes a Humanoid Robot Useful',
    date: 'December 17, 2025',
    isoDate: '2025-12-17',
    category: 'Humanoids',
    image: '/assets/blog/humanoid-robot-unsplash.jpg',
    readTime: '7 min read',
    excerpt:
      'Humanoids are not one technology. They are a dense integration of actuation, power, perception, controls, safety, manufacturing, and embodied AI.',
    dek:
      'The humanoid race is usually discussed as a race for the best body. The harder question is whether the whole stack can produce reliable work at acceptable cost.',
    highlights: [
      'A humanoid needs useful hands, compliant actuation, balance control, power density, thermal discipline, and safe human interaction.',
      'The AI layer only matters if the hardware can repeat commanded motions with enough precision and uptime.',
      'Commercial viability depends on task selection and fleet learning, not only impressive demos.',
    ],
    sections: [
      {
        heading: 'The body is a system of tradeoffs',
        body: [
          'A humanoid robot packages many engineering constraints into a human-shaped form. Legs add mobility in spaces built for people, but they cost power and control complexity. Dexterous hands open more tasks, but they increase sensing, durability, and maintenance burden. Soft coverings improve safety, but they complicate thermal design and serviceability.',
          'The useful question is not whether a humanoid can walk across a stage. It is whether the full system can perform a paid task repeatedly with acceptable downtime, safe force limits, and predictable recovery behavior.',
        ],
      },
      {
        heading: 'Perception and control must meet in real time',
        body: [
          'Humanoids need cameras, depth sensors, tactile sensing, proprioception, microphones, inertial measurement, and sometimes force-torque sensing. Those inputs have to feed control loops that operate at different speeds: high-frequency balance and joint control, mid-level manipulation, and slower language-conditioned task planning.',
          'This layered architecture matters because a language model cannot rescue poor low-level control. The robot needs stable primitives before it can usefully reason about longer tasks.',
        ],
      },
      {
        heading: 'Commercial use starts with constrained work',
        body: [
          'The early economic wins will come from constrained environments: inspection, logistics, machine tending, facility monitoring, and repetitive material movement. In these settings, a humanoid can exploit human-designed spaces while the company collects data for broader autonomy.',
          'The strongest companies will resist chasing generality too early. They will choose narrow workflows, instrument them deeply, and turn repeated execution into a training advantage.',
        ],
      },
    ],
    sources: [
      {
        title:
          'Embodied AI with Foundation Models for Mobile Service Robots: A Systematic Review',
        url: 'https://arxiv.org/abs/2505.20503',
      },
      {
        title:
          'Foundation Models in Robotics: A Comprehensive Review of Methods, Models, Datasets, Challenges and Future Research Directions',
        url: 'https://arxiv.org/abs/2604.15395',
      },
    ],
  },
  {
    slug: 'drones-ground-surveillance-ai',
    title: 'Drone Swarms Are Rewriting Ground Surveillance',
    date: 'February 12, 2026',
    isoDate: '2026-02-12',
    category: 'Drones',
    image: '/assets/blog/drone-fleet-day-unsplash.jpg',
    readTime: '6 min read',
    excerpt:
      'Security teams need persistent awareness over larger areas. Multi-agent UAV systems are becoming a practical answer when coverage, speed, and cost all matter.',
    dek:
      'The surveillance problem is no longer just putting a better camera in the sky. It is coordinating many low-cost aircraft so operators can understand change across terrain in real time.',
    highlights: [
      'Multi-agent drone systems can search, track, and hand off targets across a monitored area.',
      'The operator experience should compress video into task-level alerts, confidence, and recommended next actions.',
      'Countries facing border pressure, critical infrastructure risk, or broad terrain coverage needs will prioritize persistent aerial awareness.',
    ],
    sections: [
      {
        heading: 'Persistent coverage changes the mission',
        body: [
          'A single drone is useful for inspection. A coordinated group of drones is useful for awareness. In border regions, ports, energy sites, air bases, and disaster zones, the problem is not a single point of interest. It is detecting movement, classifying risk, and maintaining custody as conditions change.',
          'Research on UAV swarming for ground surveillance shows why multi-agent coordination matters: search, acquisition, and continuous tracking become a distributed task rather than a pilot manually steering one camera.',
        ],
      },
      {
        heading: 'The product is the command layer',
        body: [
          'The value is not only the aircraft. It is the command layer that turns many aircraft into one coherent sensing system. That layer assigns search regions, avoids duplication, handles degraded links, and tells the operator what changed.',
          'For national security customers, the key buying need is decision speed. They want fewer blind spots, faster confirmation, and a path from detection to response without overwhelming analysts with raw video.',
        ],
      },
      {
        heading: 'Autonomy should stay accountable',
        body: [
          'Surveillance autonomy must be explainable. Operators need to see why an object was flagged, which drone observed it, how confidence changed, and what the system recommends next. That audit trail is essential in civilian security and defense contexts alike.',
          'This is where robotics companies can differentiate: not by promising fully autonomous everything, but by giving commanders a reliable human-supervised system with clear state, constraints, and escalation paths.',
        ],
      },
    ],
    sources: [
      {
        title:
          'Application of Deep Reinforcement Learning to UAV Swarming for Ground Surveillance',
        url: 'https://arxiv.org/abs/2501.08655',
      },
      {
        title:
          'Counter-Unmanned Aircraft System(s): State of the Art, Challenges and Future Trends',
        url: 'https://arxiv.org/abs/2008.12461',
      },
    ],
  },
  {
    slug: 'counter-uas-critical-infrastructure',
    title: 'Critical Infrastructure Needs Layered Counter-Drone Defense',
    date: 'April 9, 2026',
    isoDate: '2026-04-09',
    category: 'Security',
    image: '/assets/home/use_cases/energy.jpeg',
    readTime: '6 min read',
    excerpt:
      'Power plants, airports, ports, bases, and data centers need layered detection and response as low-cost drones become a persistent security concern.',
    dek:
      'Counter-UAS is becoming a board-level risk for operators of critical infrastructure. The winning systems will combine sensing, identification, policy, and proportionate mitigation.',
    highlights: [
      'No single sensor is enough; radar, RF, acoustic, vision, and data fusion each cover different failure modes.',
      'Civilian environments require lawful, selective mitigation rather than indiscriminate disruption.',
      'Defense and homeland security buyers increasingly need deployable systems that can be operated by small teams.',
    ],
    sections: [
      {
        heading: 'The threat is cheap, mobile, and asymmetric',
        body: [
          'Commercial drones give small teams the ability to inspect, harass, surveil, or disrupt facilities that were not designed for low-altitude aerial threats. That changes the defensive economics. A facility cannot spend missile-level money on every unknown quadcopter, but it also cannot ignore repeated incursions.',
          "The first requirement is reliable detection. The second is classification. The third is a response path that fits the legal environment and the site's risk tolerance.",
        ],
      },
      {
        heading: 'Layered sensing is mandatory',
        body: [
          'Counter-UAS research consistently points to multiple detection modalities: radar for movement, RF for control links, acoustic signatures, electro-optical and infrared vision, and sensor fusion to reduce false positives. Each modality fails differently. A serious system combines them rather than betting on one perfect sensor.',
          'The same principle applies to mitigation. Some sites need alerting and evidence capture. Others need geofencing, protocol-aware takeover, jamming where lawful, physical intercept, or integration with existing security teams.',
        ],
      },
      {
        heading: 'The countries that move first will set doctrine',
        body: [
          'The current security climate is pushing governments to close gaps around bases, borders, energy infrastructure, and maritime corridors. Ukraine has made drones central to battlefield operations; NATO members are adapting air defense and surveillance posture; and domestic agencies are confronting drone incidents around sensitive sites.',
          'This creates demand for systems that are deployable, explainable, and affordable at scale. The doctrine will mature around tools that operators can actually use under pressure.',
        ],
      },
    ],
    sources: [
      {
        title:
          'Counter-Unmanned Aircraft System(s): State of the Art, Challenges and Future Trends',
        url: 'https://arxiv.org/abs/2008.12461',
      },
      {
        title:
          "The US military's drone-defense confusion is leaving its bases vulnerable, Pentagon watchdog finds",
        url: 'https://www.businessinsider.com/the-us-militarys-drone-defense-confusion-is-leaving-bases-vulnerable-2026-1',
      },
    ],
  },
  {
    slug: 'secure-autonomy-defense-drone-swarms',
    title: 'Secure Autonomy Is the Hard Part of Defense Drone Swarms',
    date: 'May 14, 2026',
    isoDate: '2026-05-14',
    category: 'Drones',
    image: '/assets/blog/drone-fleet-night-unsplash.jpg',
    readTime: '7 min read',
    excerpt:
      'As countries accelerate autonomous drone programs, the bottleneck is not only flight performance. It is secure coordination under spoofing, jamming, insider risk, and uncertain networks.',
    dek:
      'Defense drone programs are moving from individual aircraft to coordinated fleets. That makes cybersecurity, trust, and resilient autonomy part of the core robotics problem.',
    highlights: [
      'Low-altitude UAV swarms face GPS spoofing, insider threats, multi-hop network attacks, and limited onboard compute.',
      'Secure autonomy requires cloud-edge-end coordination, trust scoring, and forensics, not only better aircraft.',
      'Human command authority and auditability remain central as countries invest in autonomous systems.',
    ],
    sections: [
      {
        heading: 'Scale creates a new attack surface',
        body: [
          'A single drone can be jammed or spoofed. A swarm can be deceived, fragmented, infiltrated, or used to propagate bad state across the network. As defense and security organizations pursue larger autonomous fleets, the communications layer becomes as important as the airframe.',
          'Recent research on secure UAV swarms highlights GPS spoofing, insider threats, and multi-hop intrusion as core problems in low-altitude wireless networks. These risks are amplified by changing topology and constrained onboard resources.',
        ],
      },
      {
        heading: 'The answer is collaborative defense',
        body: [
          'Secure autonomy needs multiple layers: cooperative perception to catch navigation anomalies, behavior-driven authentication to identify compromised agents, and forensics to trace how an attack moved through the swarm. Those capabilities have to run across cloud, edge, and onboard systems.',
          'This is a different product requirement than "fly farther" or "carry more payload." The buyer needs confidence that the fleet can keep operating when the environment is contested.',
        ],
      },
      {
        heading: 'Current geopolitics makes this urgent',
        body: [
          'Countries are accelerating unmanned systems because drones have become central to deterrence, border security, maritime surveillance, and tactical response. Budget signals and field experience both point in the same direction: defense customers want affordable mass, but they also need control, accountability, and resilience.',
          'For robotics companies, that means secure autonomy cannot be an afterthought. It has to be designed into mission planning, operator interfaces, networking, data handling, and model governance from the beginning.',
        ],
      },
    ],
    sources: [
      {
        title:
          'Secure UAV Swarms in Low-Altitude Wireless Networks: Challenges and Solutions',
        url: 'https://arxiv.org/abs/2605.26876',
      },
      {
        title: 'Pentagon asks for $54bn in pivot towards AI-powered war',
        url: 'https://www.theguardian.com/us-news/2026/apr/22/pentagon-asks-for-54bn-in-pivot-towards-ai-powered-war',
      },
    ],
  },
].sort(
  (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
);

export const CATEGORIES = [
  'All Posts',
  ...Array.from(new Set(BLOG_POSTS.map((post) => post.category))),
];

export const FEATURED_ARTICLES = BLOG_POSTS.slice(0, 3);

export const RECENT_ARTICLES = BLOG_POSTS.slice(3);

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);
