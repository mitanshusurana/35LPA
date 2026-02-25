from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:4200")

            # Wait for the dashboard to load
            page.wait_for_selector("text=REALITY SPRINT TRACKER")

            # Wait a bit for animations/rendering
            page.wait_for_timeout(2000)

            # Take a screenshot
            page.screenshot(path="/home/jules/verification/dashboard.png")
            print("Screenshot taken at /home/jules/verification/dashboard.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
