// Book data object
const books = {
    "stay-true": {
      title: "Stay True",
      author: "Hua Hsu",
      imageThumbnail: "stay-true-thumbnail.jpg",
      imageFile: "stay-true-cover.jpg",
      theme: "Asian American experience",
      alt: "Cover of Stay True by Hua Hsu: orange, yellow text, photo of a person with camera, Pulitzer badge.",
      summary: "A memoir from the New Yorker staff writer Hua Hsu, about his coming-of-age experiences with friendship, grief, the search for self, and the arts. Dedicated to his college friend Ken who died in a tragic murder, Hsu chronicles their unique friendship through shared their everyday college experiences and formation of an Asian American identity.",
      notes: "I loved Hua Hsu's reflections on friendship and coming-of-age and how his writing felt so immersive and lyrical in this memoir. As a Berkeley alum, I especially enjoyed the nostalgia of his Berkeley college experience and how tangible it felt.",
    },
  
    "tomorrow": {
      title: "Tomorrow and Tomorrow and Tomorrow",
      author: "Gabrielle Zevin",
      imageThumbnail: "tomorrow-thumbnail.jpg",
      imageFile: "tomorrow-cover.jpg",
      theme: "Complex human relationships",
      alt: "The cover of Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin features bold, colorful text over stylized Japanese-inspired waves, noting the author also wrote The Storied Life of A.J. Fikry.",
      summary: "Lifelong friends Sam and Sadie rise to fame as video game designers, creating a blockbuster while still in college. Spanning 30 years and exploring themes of identity, disability, failure, and connection, this novel delves into their creative partnership, personal struggles, and the complexities of love in an unconventional story of ambition and redemption.",
      notes: "Zevin examines the ebbs and flows of friendship between Sam and Sadie from their college years to their adulthood. She illustrates the evolution of their friendship in a capitalist and socioeconomic lens. In the context of the video games industry, this story is a great read for those who are interested in creative world building and the development of games.",
    },
  
    "bliss": {
      title: "Bliss Montage",
      author: "Ling Ma",
      imageThumbnail: "bliss-thumbnail.jpg",
      imageFile: "bliss-cover.jpg",
      theme: "Complex human relationships",
      alt: "The cover of Bliss Montage by Ling Ma shows bright orange fruit in crinkled plastic and notes she authored Severance.",
      summary: "Ling Ma explores themes like love, loneliness, connection, and home in eight unique stories. Through surreal scenarios—a house full of ex-boyfriends, an invisibility drug, and a ritual involving burial—Ma examines the overlap between the extraordinary and the mundane.",
      notes: "I loved the unique short stories set in surreal scenarios, but still explored realistic relationships and themes. My favorite short stories in this collection are G, Tomorrow, and Peking Duck. Overall, I enjoyed Ling Ma's humorous but insightful storytelling and narration.",
    },
  
    "convenience": {
      title: "Convenience Store Woman",
      author: "Sakaya Murata",
      imageThumbnail: "convenience-thumbnail.jpg",
      imageFile: "convenience-cover.jpg",
      theme: "Funny & insightful narrators",
      alt: "The cover of Convenience Store Woman by Sayaka Murata shows a cheerful onigiri with a face and bow on a white plate against a bright blue background.",
      summary: "Convenience Store Woman tells the story of Keiko Furukura, a socially unconventional 36-year-old who finds purpose and belonging in her long-time job at a convenience store. Despite her contentment, societal pressures to marry and pursue a 'real' career push her toward drastic choices. This sharp and ironic novel explores individuality, conformity, and modern work culture through the eyes of a unique and memorable protagonist.",
      notes: "I loved how simple and eccentric this book is. The story follows Keiko's life as an embodiment of a convenience store, and its commentary on the capitalistic expectations of a person's purpose in society didn't feel too didactic. Although the dialogue was a bit repetitive at times, Keiko's narration as someone who didn't know how to act 'normal' was an interesting perspective.",
    },
  
    "pachinko": {
      title: "Pachinko",
      author: "Min Jin Lee",
      imageThumbnail: "pachinko-thumbnail.jpg",
      imageFile: "pachinko-cover.jpg",
      theme: "Complex human relationships",
      alt: "The book cover for Pachinko by Min Jin Lee depicts a stylized illustration of a traditional Korean woman in a hanbok, blending into a mountainous landscape, with a family walking toward the horizon below and a 'National Book Award Finalist' badge in the top left corner.",
      summary: "Pachinko follows Sunja, a young Korean woman in the early 1900s, whose unexpected pregnancy and rejection of her wealthy, married lover lead her to marry a kind minister and move to Japan. Her choices spark a multi-generational saga of love, sacrifice, and resilience as her family navigates societal struggles and historical upheavals, from bustling markets to Japan's elite universities and pachinko parlors. This richly told story explores themes of ambition, loyalty, and survival.",
      notes: "I really loved learning about the lives of the four-generation-long family and the historical context of Korea and Japan in the early 20th century. Overall, the lives and stories of the different characters were so intriguing, but at times felt a bit incomplete. The family's struggles are heartbreaking but also demonstrate so much love and sacrifice—it's a bittersweet read.",
    },
  
    "severance": {
      title: "Severance",
      author: "Ling Ma",
      imageThumbnail: "severance-thumbnail.jpg",
      imageFile: "severance-cover.jpg",
      theme: "Asian American experience",
      alt: "The book cover for Severance by Ling Ma features a torn pink background and a 'New York Times Book Review: Notable Book of the Year' badge.",
      summary: "In Severance by Ling Ma, Candace Chen, a routine-obsessed millennial in Manhattan, becomes a lone survivor after the Shen Fever plague devastates New York. As she documents the abandoned city as the NY Ghost, she joins a group of survivors led by the manipulative Bob, heading to a promised safe haven called the Facility. Candace, harboring a dangerous secret, must decide whether to stay or escape. This satirical novel critiques modern life’s routines and missed connections through a quirky coming-of-adulthood lens.",
      notes: "I really enjoyed the book's premise, following a second-generation Chinese millennial woman in New York during a zombie apocalypse pandemic. It subtly critiques the absurdity of late-stage capitalism even amid such a dire crisis and explores themes of home and identity, as Candace navigates life without family ties after immigrating from China. While the beginning felt a bit slow, the story picked up toward the end, and I loved the alternating structure between her pre-pandemic work and family life and her present struggles to survive. The portrayal of the second-gen immigrant experience felt fresh and not overdone, and I appreciated the subtle satirical tone throughout.",
    },
  
    "interpreter": {
      title: "Interpreter of Maladies",
      author: "Jhumpa Lahiri",
      imageThumbnail: "interpreter-thumbnail.jpg",
      imageFile: "interpreter-cover.jpg",
      theme: "Asian American experience",
      alt: "The cover of Interpreter of Maladies by Jhumpa Lahiri features a purple-orange abstract painting and a Pulitzer Prize badge.",
      summary: "In Jhumpa Lahiri's poignant stories, characters navigate the clash between their Indian heritage and the challenges of modern life. In A Temporary Matter, an Indian-American couple grieves the loss of their stillborn child while their Boston neighborhood experiences nightly blackouts. In the title story, an interpreter helps an American family reconnect with their ancestral roots in India and learns a shocking secret. Lahiri’s writing blends cultural insight and emotional depth, echoing authors like Anita Desai and Mavis Gallant.",
      notes: "I always gravitate towards books of short stories for their ability to convey such impactful themes in a small glimpse into character’s lives. Lahiri does not disappoint with this classic; she highlights different perspectives of the Indian-American experience across the world, across ages, and across socioeconomic classes. Every short story packs a punch.",
    },
  
    "conversations": {
      title: "Conversations with Friends",
      author: "Sally Rooney",
      imageThumbnail: "conversations-thumbnail.jpg",
      imageFile: "conversations-cover.jpg",
      theme: "Complex human relationships",
      alt: "The book cover for Conversations with Friends by Sally Rooney features two illustrated female faces against a vibrant yellow background.",
      summary: "Conversations with Friends follows Frances, a 21-year-old aspiring writer, and her best friend Bobbi, as they form an unexpected connection with a married couple. Frances is drawn to Melissa, an older journalist, and her husband Nick, a disillusioned actor. What begins as a flirtation grows into a complex and intimate relationship that challenges Frances's intellectual convictions. As she navigates these relationships and her own desires, Frances faces the disorienting reality of living in the moment. The novel explores the pleasures and dangers of youth with sharp insight and emotional depth.",
      notes: "Sally Rooney can always deftly describe the nuances of complex relationships, and Conversations with Friends is no different, where she dives into the power dynamics of the character relationships. The way she's able to convey the intricacies of human relationships and emotions with such incisive prose is just so brilliant.",
    },
  
    "normal-people": {
      title: "Normal People",
      author: "Sally Rooney",
      imageThumbnail: "normal-people-thumbnail.jpg",
      imageFile: "normal-people-cover.jpg",
      theme: "Complex human relationships",
      alt: "The cover of Normal People by Sally Rooney shows white line drawings of two faces on blue and green backgrounds, with a New York Times Book Review badge.",
      summary: "Normal People by Sally Rooney follows Connell and Marianne, two teenagers with a complicated, secret connection that begins in high school and continues through their years at Trinity College. Despite their differences in social status, they are repeatedly drawn back to each other, navigating love, self-destruction, and personal growth. The novel explores themes of class, first love, and the complexities of family and friendship through Rooney’s sharp psychological insight and minimalist prose.",
      notes: "When I first read this book two years ago, I was so frustrated by the characters and their inability to communicate with each other, despite their clear attraction. After rereading it, I see how Sally Rooney is simply depicting the reality of many relationships. I also loved how easy it was to read her writing and how she weaves nuances into the story.",
    },
    
    "easy-job": {
      title: "There's No Such Thing as an Easy Job",
      author: "Kikuko Tsumura",
      imageThumbnail: "easy-job-thumbnail.jpg",
      imageFile: "easy-job-cover.jpg",
      theme: "Funny & insightful narrators",
      alt: "The cover of There's No Such Thing as an Easy Job by Kikuko Tsumura shows a person resting on a desk in a vibrant pink and blue palette.",
      summary: "This darkly humorous and intriguing tale follows a young woman who seeks a job that requires minimal effort—no reading, writing, or thinking. As she moves through various odd jobs, from writing bus ads to composing advice for rice cracker wrappers, it becomes clear she's not just looking for an easy job, but something deeper and more meaningful.",
      notes: "I was excited to read this book because of the comparison with Convenience Store Woman meets My Year of Rest and Relaxation. Following a woman suffering from burnout and searching for easy jobs, the book has a somewhat aimless storyline but shines in its deadpan humor and moments of absurdism. Kinda hard to get through at times because it's so long, but still a good read.",
    },
  };