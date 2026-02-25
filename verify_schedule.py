from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:4202/schedule")
            page.wait_for_timeout(3000) # Wait for load and animations

            # Screenshot Schedule
            page.screenshot(path="/home/jules/verification/schedule.png", full_page=True)
            print("Screenshot taken at /home/jules/verification/schedule.png")

            # Click a checkbox (complete a task)
            page.click("input[type='checkbox']:first-of-type")
            page.wait_for_timeout(1000)

            # Screenshot after checkbox
            page.screenshot(path="/home/jules/verification/schedule_checked.png", full_page=True)

            # Go to Dashboard to check XP/Progress
            page.goto("http://localhost:4202/dashboard")
            page.wait_for_timeout(2000)
            page.screenshot(path="/home/jules/verification/dashboard_updated.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
